import React from "react";
import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <div>
          <p>company</p>
          <ul>
            <li>
              <a href="#">career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Policies</p>
          <ul>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Secure Shopping</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Help</p>
          <ul>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Return</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Misc</p>
          <ul>
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="socialMedia">
        <div className="smLinks">
          <FaFacebook className="icon ficon" />
        </div>
        <div className="smLinks">
          <FaXTwitter className="icon xicon" />
        </div>
        <div className="smLinks">
          <FaLinkedinIn className="icon licon" />
        </div>
        <div className="smLinks">
          <ImPinterest2 className="icon picon" />
        </div>
        <div className="smLinks">
          <FaYoutube className="icon yicon" />
        </div>
        <div className="smLinks">
          <FaInstagram className="icon instaicon" />
        </div>
      </div>
      <div className="copyrightBox">
        <small>Copyright © 2023 . Bookswagon.com. All Rights Reserved</small>
      </div>
    </div>
  );
}

export default footer;
