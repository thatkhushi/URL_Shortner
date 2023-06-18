import { nanoid } from "nanoid";
import URL from "../models/url.js";
import mongoose from "mongoose";

export const handleNewShortURL = async (req, res) => {
  const body = req.body;
  // console.log(body);
  if (!body.url || !body.notes) {
    return res
      .status(400)
      .json({ message: "URL and notes are required fields 🥲" });
  }
  const shortId = nanoid(8);
  await URL.create({
    shortId: `${shortId}`,
    redirectURL: body.url,
    notes: body.notes,
    visitHistory: [],
    clicks: 0,
  });
  return res.json({ id: shortId });
};

export const getShortId = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
      $inc: {
        clicks: 1,
      },
    }
  );
  res.redirect(entry?.redirectURL);
};
export const getAllUrls = async (req, res) => {
  try {
    const allUrls = await URL.find().sort({ $natural: -1 });
    const allUrlDeatils = [];
    allUrls.forEach((url) => {
      allUrlDeatils.push({
        _id: url?._id,
        shortId: url?.shortId,
        redirectURL: url?.redirectURL,
        notes: url?.notes,
        clicks: url?.clicks,
      });
    });
    res.status(200).json(allUrlDeatils);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUrl = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("url unavailable...");
  }

  try {
    await URL.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const handleSearch = async (req, res) => {
  const { data } = req.query;

  try {
    if (data != "") {
      const result = await URL.aggregate([
        {
          $search: {
            index: "autocomplete_notes",
            compound: {
              should: [
                {
                  autocomplete: {
                    query: data,
                    path: "notes",
                    fuzzy: {
                      maxEdits: 1,
                    },
                  },
                },
                {
                  autocomplete: {
                    query: data,
                    path: "redirectURL",
                    fuzzy: {
                      maxEdits: 2,
                    },
                  },
                },
                {
                  autocomplete: {
                    query: data,
                    path: "shortId",
                    fuzzy: {
                      maxEdits: 1,
                    },
                  },
                },
              ],
            },
          },
        },
        {
          $limit: 5,
        },
        {
          $project: {
            notes: 1,
            shortId: 1,
            redirectURL: 1,
            visitHistory: 1,
            clicks: 1,
          },
        },
      ]);
      return res.status(200).send(result);
    } else {
      return res.json([]);
    }
  } catch (error) {
    // console.log(error);
    return res.json([]);
  }
};
