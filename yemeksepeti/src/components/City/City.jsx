import React, { useEffect } from "react";
import ankara from "../../assets/ankara-kalesi.jpg";
import istanbul from "../../assets/istanbul.jpg";
import izmir from "../../assets/izmir.jpeg";
import bursa from "../../assets/bursa.jpg";
import antalya from "../../assets/antalya.jpg";
import "../../pages/Cities/Cities.css"

export default function City({ cityName }) {
  const cityImages = {
    Ankara: ankara,
    Antalya: antalya,
    Bursa: bursa,
    Istanbul: istanbul,
    Izmir: izmir,
  };

  useEffect(() => {
    const disableDrag = (event) => {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    };

    document.addEventListener("dragstart", disableDrag);
    return () => {
        document.removeEventListener("dragstart", disableDrag);
    };
}, []);

  return (
    <div className="city-box">
      <img src={cityImages[cityName]} alt={cityName} className="city-image" />
      <h3>{cityName}</h3>
    </div>
  );
}
