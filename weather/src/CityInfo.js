import React, { useState } from "react";
import City from "./City";
import Form from "./Form";

export default function CityInfo() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchWeather = (cityName) => {
    setLoading(true);
    setError(false);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_SECRET_CODE}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the resourse");
        }
        return res.json();
      })
      .then((data) => {
        if (data.cod === 200) {
          setCityName("");
          setCityData([data, ...cityData]);
          setError(false);
          setLoading(false);
        } else {
          setError(data.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleDeleteCity = (id) => {
    const filterCity = cityData.filter((city) => city.id !== id);
    setCityData(filterCity);
  };

  const handleOnSubit = (e) => {
    e.preventDefault();
    if (cityName !== "") fetchWeather(cityName);
  };

  const handleOnChange = (e) => {
    setCityName(e.target.value);
  };
  return (
    <>
      <Form
        handleOnChange={handleOnChange}
        handleOnSubit={handleOnSubit}
        cityName={cityName}
      />

      <div style={{ color: "#ffffff" }}>
        {loading && <p>Loading...</p>}
        {error && <p>Error 404</p>}
        {cityName === "" ? <p>Insert city to get current weather</p> : null}
      </div>

      <City cityData={cityData} handleDeleteCity={handleDeleteCity} />
    </>
  );
}
