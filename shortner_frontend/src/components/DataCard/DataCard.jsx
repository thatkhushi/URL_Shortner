import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import "./DataCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import copyy from "../../assets/copy.png";
import bar from "../../assets/bar.png";
import writing from "../../assets/writing.png";
import { Link } from "react-router-dom";
import { deleteurl } from "../../actions/url";
import copy from "copy-to-clipboard";


const DataCard = ({ url }) => {
  // const urlData = useSelector((state) => state.getUrlReducer);
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   console.log("hii....")
  //    fetchAllUrls(dispatch);
  //  },[urlData])//urlData


  const[copiedUrl,setCopiedUrl]=useState(false);

  const copyToClipboard = (id) => {
    copy(`http://localhost:5000/url/${id}`);
    setCopiedUrl(true);
  };
  return (
    <div className="dataCardContainer" >
      <div className="dataCardWrapper">
        <div className="textWithUrl">
          <h4 className="dataCardText">{url?.notes}</h4>
          <div className="dataCardUrl" style={{ color: "#00a7ca" }}>
            <p>
              <Link
                to={url?.redirectURL}
                target="blank"
                style={{ textDecoration: "none" }}
              >
                {url?.redirectURL}
              </Link>
            </p>
            <p>
              {" "}
              <Link
                to={`http://localhost:5000/url/${url?.shortId}`}
                target="blank"
                style={{ textDecoration: "none" }}
              >
                http://www.shorty.com/{url?.shortId}
              </Link>
            </p>
          </div>
        </div>
        <div className="statistics">
          <div className="countStats">
            <div className="data_stats">
              <p>Count</p>
              <p>{url?.clicks}</p>
            </div>
            <div className="imageDiv">
              <img src={bar} className="copy_img" />
            </div>
          </div>
          <div className="iconsContainer">
            {/* <button
              style={{ border: "0px", background: "transparent" }}
              title="edit"
            >
              <img src={writing} className="copy_img" alt="edit" />
            </button> */}
            <button
              style={{ border: "0px", background: "transparent" }}
              title="copy"
              onClick={()=>copyToClipboard(url?.shortId)}
            >
              <img src={copyy} className="copy_img" alt="copy" style={copiedUrl ?{opacity:"0.5"}:{opacity:"1"}} />
            </button>
            <button
              style={{ border: "0px", background: "transparent" }}
              title="delete"
              onClick={deleteurl(url?._id)}
            >
              <DeleteIcon className="copy_img" alt="delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
