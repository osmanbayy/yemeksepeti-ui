import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./UserModal.css"

export default function UserModal({ setIsLoginModalOpen }) {
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <div>
      <div className="login-modal-overlay" onClick={closeLoginModal}>
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <h2>Hoş geldin</h2>
          <p>Devam etmek için kayıt ol ya da giriş yap</p>
          <div className="social-buttons">
            <button className="social-button facebook-btn">
              <FaFacebook className="icon" /> <span>Facebook ile devam et</span>
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
    </div>
  );
}
