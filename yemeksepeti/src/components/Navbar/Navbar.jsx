import React, { useState } from "react";
import mainLogo from "../../assets/logo.png";
import { PiGlobe } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import "./Navbar.css";
import UserModal from "../UserModal/UserModal";
import AuthModal from "../AuthModal/AuthModal";

export default function Navbar() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [isChoosed, setIsChoosed] = useState("tr");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
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
            <a className="signup-btn" href="#" onClick={handleLoginClick}>
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
        <UserModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsAuthModalOpen={setIsAuthModalOpen}
          isAuthModalOpen={isAuthModalOpen}
        />
      )}
      {isAuthModalOpen && (
        <AuthModal
          setisAuthModalOpen={setIsAuthModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          isAuthModalOpen={isAuthModalOpen}
        />
      )}
    </section>
  );
}
