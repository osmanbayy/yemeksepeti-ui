import React from "react";
import guvenDamgasi from "../../assets/guvendamgasi-logo.png";
import yemeksepetiLogo from "../../assets/logo.png";
import deliveryheroLogo from "../../assets/delivery-hero.jpg";
import footerQr from "../../assets/footer-qr.jpeg";
import "./Footer.css";
import { footerLinks } from "../../utils/footerLinks.js";
import {
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";
import { PiXLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="container footer">
      <div className="top-footer">
        <img src={guvenDamgasi} alt="" />
        <img src={footerQr} alt="" />
      </div>
      <hr />
      <div className="middle-footer">
        <div className="footer-copyright">&copy;Yemeksepeti</div>
        <div className="footer-links">
          <ul className="footer-links-list">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="link-item"
                data-length={link.length}
                style={{ "--link-length": `${link.length * 10}px` }}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="bottom-footer">
        <div className="footer-logos">
          <img src={yemeksepetiLogo} className="yemeksepeti-image" alt="" />
          <div></div>
          <img src={deliveryheroLogo} className="delivery-image" alt="" />
        </div>
        <div className="share-buttons">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/yemeksepeti/"
            className="icon-button"
          >
            <BiLogoLinkedin className="icon" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/yemeksepeti/"
            className="icon-button"
          >
            <BiLogoInstagram className="icon" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Yemeksepeti"
            className="icon-button"
          >
            <BiLogoFacebook className="icon" />
          </a>
          <a
            target="_blank"
            href="https://x.com/yemeksepeti"
            className="icon-button"
          >
            <PiXLogo className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
