import React from "react";
import Searchbar from "./Searchbar.js";
import Cart from "../cart/Cart.js";
import Account from "./Account.js";
import "./upperHeader.css";
function UpperHeader() {
  return (
    <div className="upperHeader">
      <div className="leftHeader">
        <img
          src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
          alt="logo"
        />
        <Searchbar />
      </div>

      <div className="rightHeader">
        <Account />
        <Cart />
      </div>
    </div>
  );
}

export default UpperHeader;
