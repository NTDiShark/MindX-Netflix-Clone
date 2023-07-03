import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { valueSearchStore } from "../store/valueSearchStore";
import { searchMovie } from "../servicess/functions";
import { BASE_URL_IMAGE } from "../requests";
import useScrollPosition from "../hooks/useScrollPosition";

const SearchScreen = () => {
  const valueSeach = useRecoilValue(valueSearchStore);
  const [movies, setMovies] = useState([]);

  const position = useScrollPosition();
  console.log(
    "🚀 ~ file: SearchScreen.js:13 ~ SearchScreen ~ position:",
    position
  );

  useEffect(() => {
    searchMovie(valueSeach).then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, [valueSeach]);

  useEffect(() => {}, [position]);

  return (
    <div className="contain-search">
      <h2 className="title-search">Search: {valueSeach}</h2>
      <div className="movie-search">
        {movies &&
          movies?.length > 0 &&
          movies.map((movie) => (
            <div style={{ position: "relative" }} key={movie.id}>
              <img
                className={`poster`}
                src={`${BASE_URL_IMAGE}${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div className="movie-title">
                {movie?.title || movie?.name || movie?.original_name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchScreen;
