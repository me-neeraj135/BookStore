import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineRight } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import "./account.css";
function Account() {
  return (
    <div className="dropdown">
      <RxAvatar color="red" fontSize="2rem" />
      <p className="user_name">my account</p>
      <AiOutlineRight />
      <div className="dropdown_content">
        <p className="login">
          <a href="#">Log in</a>
        </p>
        <div className="middle_content">
          <p>
            <a href="#">
              New to Bookswagon ? <br />
              <span>Sign up</span>
            </a>
          </p>
          <p>
            <a href="#">your Account</a>
          </p>
          <p>
            <a href="#">Personal Setting</a>
          </p>
          <p>
            <a href="#">Your Orders</a>
          </p>
        </div>
        <p className="currencyBox">
          currency <input type="checkbox"></input>
          <MdCurrencyRupee />
          <input type="checkbox" />
          <BsCurrencyDollar />
        </p>
      </div>
    </div>
  );
}

export default Account;
