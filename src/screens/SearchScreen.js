import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { valueSearchStore } from "../store/valueSearchStore";
import { searchMovie } from "../servicess/functions";
import { BASE_URL_IMAGE } from "../requests";
import { getMovieTrailerVsGenres } from "../servicess/functions";
import Modal from "../components/Modal/Modal";
import ReactPlayer from "react-player";

const SearchScreen = () => {
  const valueSeach = useRecoilValue(valueSearchStore);
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [trailerKey, settrailerKey] = useState("");

  const handleCloseModal = () => {
    setshowModal(false);
    setCurrentMovie({});
  };

  const handleClickMovie = (movie) => {
    setCurrentMovie(movie);
    setshowModal(true);
  };

  useEffect(() => {
    if (currentMovie?.id)
      getMovieTrailerVsGenres(currentMovie).then((res) =>
        settrailerKey(res.trailerKey)
      );
  }, [currentMovie]);

  useEffect(() => {
    searchMovie(valueSeach).then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, [valueSeach]);

  return (
    <div className="contain-search">
      <h2 className="title-search">Search: {valueSeach}</h2>
      <div className="movie-search">
        {movies &&
          movies?.length > 0 &&
          movies.map((movie) => (
            <div
              style={{ position: "relative" }}
              key={movie.id}
              onClick={() => handleClickMovie(movie)}
            >
              <img
                className={`poster`}
                src={`${BASE_URL_IMAGE}${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt={movie.name}
                style={{ height: "240px" }}
              />
              <div className="movie-title">
                {movie?.title || movie?.name || movie?.original_name}
              </div>
            </div>
          ))}
      </div>
      <Modal visible={showModal} center onClose={handleCloseModal}>
        <div className="popup-detail-movie">
          <ReactPlayer
            playing
            controls
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SearchScreen;
