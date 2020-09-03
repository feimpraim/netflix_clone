import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      request();
      const request = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        request.data.reqults[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    return request;
    fetchData();
  }, []);

  //console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgrounImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
