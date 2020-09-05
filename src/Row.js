import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      //return request;
    }
    fetchData();
  }, [fetchUrl]);

  /* if blank run once when the row loads and dont run again
 if you pass variable it will run once when row loads an again when there is 
 a change = dependency */

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__posters">
        {/* serveral ro powers*/}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${
              isLargeRow && "row__posterLarge"
            }`} /* string contcat to with option can be either row__poster or row__posterLarge*/
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/*Container*/}
    </div>
  );
}

export default Row;
