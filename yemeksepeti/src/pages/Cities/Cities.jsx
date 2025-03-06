import React from "react";
import City from "../../components/City/City";
import "./Cities.css"
export default function Cities() {
  const cities = ["Ankara", "Antalya", "Bursa", "Istanbul", "Izmir"];

  return (
    <div className="cities-container">
      <h2>Türkiye'nin her şehrindeyiz!</h2>
      <div className="city-content">
        {cities.map((city, index) => (
          <City key={index} cityName={city} />
        ))}
      </div>
    </div>
  );
}
