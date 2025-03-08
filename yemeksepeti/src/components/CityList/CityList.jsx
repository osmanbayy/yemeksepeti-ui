import React from "react";
import { cities } from "../../utils/cities.js";
import "./CityList.css";

const CityList = () => {

  return (
    <div className="cities-list-container">
      <hr className="line" />
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
      <hr className="line" />
    </div>
  );
};

export default CityList;
