import React from "react";
import "./Article.css";
import articleImage from "../../assets/article-image.webp";

export default function Article() {
  return (
    
      <div className="article-container">
        <h2>Restoran veya Mahalle esnafı iş ortağımız olun</h2>
        <div className="relative-image">
          <img src={articleImage} alt="" className="article-img" />
          <div className="article-absolute container">
            <h3>
              Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
            </h3>
            <p>
              Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
              semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı
              da işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir
              işyeri ya da üniversite kampüsü, hizmet vermek istediğiniz kim
              varsa artık müşteriniz.
            </p>
            <p>
              Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
              ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
              yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya
              ulaştırıyor.
            </p>
            <p>
              Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
              ortaklarımızdan biri olabilirsiniz.
            </p>
            <button className="article-btn">Başlayalım</button>
          </div>
        </div>
      </div>
    
  );
}
