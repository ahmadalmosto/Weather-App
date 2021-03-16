import React from "react";
import "./FormSearch.css";
export default function Form({
  handleOnChange = (f) => f,
  handleOnSubit,
  cityName,
}) {
  return (
    <>
      <div className="container">
        <h1>Weather</h1>
        <form onSubmit={handleOnSubit}>
          <input type="text" onChange={handleOnChange} value={cityName} />
          <button type="submit" className="buttonSearch">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
