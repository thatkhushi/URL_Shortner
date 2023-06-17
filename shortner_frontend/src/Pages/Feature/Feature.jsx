import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./Feature.css";
import Footer from "../../components/Footer/Footer";
import DataCard from "../../components/DataCard/DataCard";
import { sendurl } from "../../actions/url.js";
import { fetchAllUrls,fetchAllFilteredUrls } from "../../actions/url.js";
// import isUrl from "is-url";

const Feature = () => {
  const [URL, setURL] = useState({});
  const [notesInput, setNotesInput] = useState("");

  const urlData = useSelector((state) => state.getUrlReducer);
  const filteredData = useSelector((state) => state.getFilteredUrlReducer);

  useEffect(() => {
    const idx = setInterval(() => {
      fetchAllUrls(dispatch);
    }, 1000);
    return () => {
      clearInterval(idx);
    };
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!URL) {
      alert("Enter valid url");
    } else {
      dispatch(sendurl({ url: URL, notes: notesInput }));
    }
    fetchAllUrls(dispatch);
  };
  return (
    <div className="feature__container">
      <p className="text3">Paste URL</p>
      <div className="feature">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="url_input_container">
              <input
                type="text"
                name="URL"
                onChange={(e) => {
                  setURL(e.target.value);
                }}
                className="url_input"
                placeholder="Paste your URL 👉"
              />
              <button type="submit" className="shorten_button">
                Shorten
              </button>
            </div>
            <div></div>
          </div>
          <div className="textInputArea">
            <label>
              <input
                name="notesInput"
                placeholder="Add notes so that you can remember 😊"
                value={notesInput}
                style={{
                  width: "49vw",
                  height: "36px",
                  marginTop: "1rem",
                  padding: "10px",
                }}
                onChange={(e) => setNotesInput(e.target.value)}
                maxLength="55"
              />
            </label>
          </div>
        </form>
      </div>
      <div>
        {filteredData.length === 0 ? (
        <>
          {urlData.map((url) => (
            <DataCard url={url} key={url?._id} />
          ))}
        </>
         ) : (
          <>
            {filteredData.map((url) => (
              <DataCard url={url} key={url?._id} />
            ))}
          </>
        )} 
      </div>
      <Footer />
    </div>
  );
};

export default Feature;

// const {
//   register,
//   // handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm({
//   mode: "onTouched",
//   defaultValues: {
//     url: "https://",
//   },
// });

{
  /* <input
  type="url"
  className="url_input"
  {...register("url", {
    required: {
      value: true,
      message: "Url is required",
    },
    // pattern: {
    //   value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
    //   message: "Please enter a valid url",
    // },
  })}
  onChange={(e) => {
    setUrl(e.target.value);
  }}
/> */
}
