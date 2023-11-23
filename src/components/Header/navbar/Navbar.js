import React from "react";
import UpperHeader from "../UpperHeader.js";
import LowerHeader from "../LowerHeader.js";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav>
        <UpperHeader />
        <LowerHeader />
      </nav>
    </header>
  );
}

export default Navbar;
