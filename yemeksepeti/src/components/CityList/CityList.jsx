import React from "react";
import { cities } from "../../utils/cities.js";
import "./CityList.css";

const CityList = () => {
  const chunkedCities = [];
  const chunkSize = Math.ceil(cities.length / 4);

  for (let i = 0; i < 4; i++) {
    chunkedCities.push(cities.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return (
    <div className="cities-list-container">
      <h2>Diğer Şehirler</h2>
        <ul className="cities-list">
      {cities.map((city, index) => (
        <li
          key={index}
          className="city-item"
          data-length={city.length}
          style={{ "--city-length": `${city.length * 10}px` }}
        >
          {city}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CityList;
