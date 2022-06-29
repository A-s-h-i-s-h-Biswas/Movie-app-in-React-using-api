import React from "react";
import "./App.css";
import { useState } from "react";
import searchIcon from "./search.svg";

const MovieSearch = (props) => {
  const [searchTitle, setSearchTitle] = useState("");

  const getInput = (event) => {
    const inputValue = event.target.value;
    setSearchTitle(inputValue);
  };
    const submitInput = () => {
    if (searchTitle === "") {
        return;    
    }
    props.onSearch(searchTitle);
    // event.preventdefault();
  };

  ///////////////// keybord enter key not working ///////////////////////////
  const something = (event) => {
    if (event.keyCode === "13") {
      console.log("Enter");
      return submitInput;
    }
  };
  ///////////////// keybord enter key not working ///////////////////////////
  return (
    <div className="search">
      <input
        placeholder="Search Movie Here..........."
        value={searchTitle}
        onChange={getInput}
      />
      <img
        src={searchIcon}
        alt="search"
        onClick={submitInput}
        onKeyDown={(e) => something(e)}
      />
    </div>
  );
};
export default MovieSearch;