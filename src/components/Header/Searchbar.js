import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";

function Searchbar() {
  return (
    <div className="nav_serchbar">
      <input
        type="text"
        name=""
        id=""
        placeholder="Title, Author, Publisher or ISBN "
      />
      <div className="search_icon">
        <AiOutlineSearch id="search" color="white" fontSize="2rem" />
      </div>
    </div>
  );
}

export default Searchbar;
