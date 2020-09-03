import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
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

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgrounImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
    </header>
  );
}

export default Banner;