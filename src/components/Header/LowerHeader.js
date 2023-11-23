import React from "react";
import { CiHeart } from "react-icons/ci";
import "./lowerHeader.css";

function LowerHeader() {
  return (
    <div className="lowerHeader">
      <ul className="leftLowerHead">
        <li>book</li>
        <li>new arrivals</li>
        <li>box sets</li>
        <li>best sellers</li>
        <li>fiction books</li>
        <li>award winners</li>
        <li>featured authors</li>
        <li>today's deal</li>
        <li>request a book</li>
      </ul>
      <div className="rightLowerHead">
        <CiHeart fontSize="1.5rem" color="red" />
      </div>
    </div>
  );
}

export default LowerHeader;
