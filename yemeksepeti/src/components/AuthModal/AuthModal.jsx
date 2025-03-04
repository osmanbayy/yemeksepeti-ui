import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuArrowLeft } from "react-icons/lu";
import mailIcon from "../../assets/mail-icon.png";

export default function AuthModal({
  setisAuthModalOpen,
  isAuthModalOpen,
  setIsLoginModalOpen,
}) {
  const [inputValue, setInputVlalue] = useState("");
  const closeAuthModal = () => {
    setisAuthModalOpen(false);
  };
  if (isAuthModalOpen) {
    setIsLoginModalOpen(false);
  }
  return (
    <div>
      <div className="login-modal-overlay" onClick={closeAuthModal}>
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <div className="mail-icon">
            <img src={mailIcon} alt="" className="mail-icon-image" />
          </div>
          <h2>E-Posta adresin nedir?</h2>
          <p>Kayıtlı bir hesabın olup olmadığını kontrol edeceğiz.</p>

          <div className="input-container">
            <input
              type="email"
              placeholder="E-Posta Adresiniz"
              id="floating-input"
              value={inputValue}
              onChange={(e) => setInputVlalue(e.target.value)}
            />
            <label htmlFor="floating-input">E-Posta</label>
          </div>

          <div className="social-buttons">
            <button disabled={!inputValue} className="auth-modal-btn">
              Devam Et
            </button>
          </div>

          <button className="close-btn" onClick={closeAuthModal}>
            <AiOutlineClose className="icon" />
          </button>
          <button
            className="back-btn"
            onClick={() => {
              setIsLoginModalOpen(true);
              setisAuthModalOpen(false);
            }}
          >
            {" "}
            <LuArrowLeft className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
