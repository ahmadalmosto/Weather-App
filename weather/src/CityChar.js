import React, { useState, useEffect } from "react";
import Char from "./Char";

export default function CityChar({ match }) {
  const [charData, setCharData] = useState([]);
  const [isError, setIsError] = useState({ status: false, text: "Errror 404" });
  const id = match.params.id;
  const Aborting = new AbortController();
  const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_SECRET_CODE}`;
  function weatherChar() {
    fetch(URL, { signal: Aborting.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not frtch yhe data");
        }
        return res.json();
      })
      .then((data) => {
        setCharData(data.list);
      })
      .catch((err) => {
        setIsError({ status: true, text: err.message });
      });
  }
  useEffect(() => {
    weatherChar();
    return () => Aborting.abort();
  });
  return (
    <div>
      <Char data={charData} />
      {isError.status && <p>{isError.text}</p>}
    </div>
  );
}
