import React, { useState } from "react";
import mainLogo from "../../assets/logo.png";
import { PiGlobe } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [isChoosed, setIsChoosed] = useState("tr");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <section className="header-section">
      <header className="main-header">
        <div className="">
          <img src={mainLogo} alt="logo" className="logo" />
        </div>
        <div className="navbar">
          <div>
            <a className="login-btn" href="#" onClick={handleLoginClick}>
              Giriş Yap
            </a>
          </div>

          <div>
            <a className="signup-btn" href="#">
              Kayıt Ol
            </a>
          </div>

          <div onClick={handleDropdownClick} className="lang-icon">
            <PiGlobe className="icon" />
            <span>TR</span>
            {dropdownIsOpen ? (
              <IoIosArrowUp className="icon" />
            ) : (
              <IoIosArrowDown className="icon" />
            )}
          </div>

          <LiaShoppingBagSolid className="shop-icon" />

          {dropdownIsOpen && (
            <div className="overlay" onClick={handleDropdownClick}></div>
          )}

          <div className={`dropdown-modal ${dropdownIsOpen ? "open" : ""}`}>
            <ul>
              <li onClick={() => setIsChoosed("tr")}>
                Türkçe{" "}
                {isChoosed === "tr" && <SiTicktick className="choose-icon" />}
              </li>
              <li onClick={() => setIsChoosed("en")}>
                English{" "}
                {isChoosed === "en" && <SiTicktick className="choose-icon" />}
              </li>
            </ul>
          </div>
        </div>
      </header>

      <header className="mobile-header">
        <div className="mobile-header-container">
          <div className="user-div" onClick={handleLoginClick}>
            <FaRegUser className="user-icon" />
          </div>
          <div className="logo-div">
            <img src={mainLogo} alt="" className="logo" />
          </div>
          <div className="shop-div">
            <LiaShoppingBagSolid className="shop-icon" />
          </div>
        </div>
      </header>

      {isLoginModalOpen && (
        <div className="login-modal-overlay" onClick={closeLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Hoş geldin</h2>
            <p>Devam etmek için kayıt ol ya da giriş yap</p>
            <div className="social-buttons">
              <button className="social-button facebook-btn">
                <FaFacebook className="icon" />{" "}
                <span>Facebook ile devam et</span>
              </button>
              <button className="social-button google-btn">
                <FcGoogle className="icon" /> <span>Google ile devam et</span>
              </button>
            </div>
            <div line-div>
              <div className="line"></div>
            </div>
            <div className="social-buttons">
              <button className="login-modal-btn">Giriş Yap</button>
              <button className="signup-modal-btn">Kayıt Ol</button>
            </div>
            <button className="close-btn" onClick={closeLoginModal}>
              <AiOutlineClose className="icon" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
