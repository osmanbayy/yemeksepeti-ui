import React, { useState } from "react";
import homePicture from "../../assets/mainpicture.webp";
import "./Home.css";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="home-container">
      <div className="home-picture-div container">
        <img src={homePicture} alt="" className="home-image" />
      </div>
      <div className="home-info">
        <h2>Yemek ya da market, tüm ihtiyaçların kapında!</h2>
        <div className="input-area">
          <div className="parent-input">
            <div className="input-container">
              <input
                type="text"
                placeholder="Örneğin: Esentepe Dede Korkut Sk. No:28/1"
                id="floating-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label htmlFor="floating-input">Adresini Belirle veya Seç</label>
              <button className="home-btn">Keşfet</button>
            </div>
            <div className="location">
              <FaLocationCrosshairs className="icon" />{" "}
              <span>Konumumu Bul</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
