import React from "react";
import { Link } from "react-router-dom";
import "./cityCard.css";

export default function City({ cityData, handleDeleteCity = (f) => f }) {
  return (
    <div>
      {cityData
        ? cityData.map((city) => {
            return (
              <div key={city.id}>
                <div className="card">
                  <button
                    className="delete"
                    onClick={() => handleDeleteCity(city.id)}
                  >
                    X
                  </button>
                  <div className="name">
                    <Link to={`/char/${city.id}`} className="link">
                      <h3>{city.name}</h3>
                    </Link>
                    <img
                      className="image"
                      src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                      alt={city.weather[0].icon}
                    />
                  </div>

                  <p className="cardnum">
                    {Math.round(city.main.temp_min)}° ||{" "}
                    {Math.round(city.main.temp_max)}°
                  </p>
                  <p>{city.weather[0].description}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
