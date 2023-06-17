import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    clicks:{
      type:Number,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    notes:{
      type:String,
      required:true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  { timeStamp: true }
);

export default mongoose.model("url", urlSchema);

