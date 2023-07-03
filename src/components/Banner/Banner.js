import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../requests";

const Banner = (props) => {
  const [movie, setMovie] = useState({});

  const { getMovie } = props;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      {movie && (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${
              movie?.backdrop_path || movie?.poster_path
            }")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner-contents">
            <h1 className="banner-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
              <button className="banner-button" onClick={() => getMovie(movie)}>
                Play
              </button>
              <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-description">
              {truncate(movie?.overview, 150)}
            </h1>

            <div className="banner--fadeBottom"></div>
          </div>
        </header>
      )}
    </>
  );
};

export default Banner;
