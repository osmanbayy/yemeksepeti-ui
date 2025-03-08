import React from "react";
import "./LastPage.css";
import appsImage from "../../assets/yemeksepeti-apps.webp";
import qrCode from "../../assets/qrcode.png";
import { SiAppgallery } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";

export default function LastPage() {
  return (
    <div className="last-container container">
      <h2>Mobil uygulamamızı indirin</h2>
      <div className="last-section">
        <div className="last-infos">
          <h3>Yemek ve market ihtiyaçlarının tamamı için hemen indir!</h3>
          <div className="infos">
            <div className="qr-div">
              <img src={qrCode} alt="" className="qr-code" />
            </div>
            <p>
              Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların
              dakikalar içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup
              siparişini ver, online ya da kapıda dilediğin gibi öde.
            </p>
          </div>
          <div className="download-buttons">
            <div className="download-button">
              <div className="social-icon">
                <IoLogoApple className="icon" />
              </div>
              <div className="btn-desc">
                <span>Download on the</span>
                <p>App Store</p>
              </div>
            </div>
            <div className="download-button">
              <div className="social-icon">
                <FaGooglePlay className="icon" />
              </div>
              <div className="btn-desc">
                <span>GET IT ON</span>
                <p>Google Play</p>
              </div>
            </div>
            <div className="download-button">
              <div className="social-icon">
                <SiAppgallery style={{ color: "red" }} className="icon" />
              </div>
              <div className="btn-desc">
                <span>EXPLORE IT ON</span>
                <p>AppGallery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="last-image">
          <img src={appsImage} alt="" className="apps-image" />
        </div>
      </div>
    </div>
  );
}
