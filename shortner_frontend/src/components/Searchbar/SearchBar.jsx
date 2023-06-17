import React,{useState,useEffect} from "react";
import { TextField } from "@mui/material";
import "./SearchBar.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllFilteredUrls } from "../../actions/url";


const SearchBar = () => {
  const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const filteredData = useSelector((state) => state.getFilteredUrlReducer);

  useEffect(()=>{
    dispatch(fetchAllFilteredUrls(inputText));
  },[inputText,filteredData]);


  return (
    <div>
      <div className="main">
        <div className="search">
          <TextField
          type="text"
          name="inputText"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            onChange={(e)=> setInputText(e.target.value)}
            placeholder="Search for your link 🔍"
            className="searchBar"
            style={{fontFamily:"cursive"}}
                       
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
