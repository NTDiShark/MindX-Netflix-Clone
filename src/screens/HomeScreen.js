import React, { useEffect, useState } from "react";
import Row from "../components/Row/Row";
import requests from "../requests.js";
import Nav from "../components/Navbar/Nav";
import Banner from "../components/Banner/Banner";
import { getMovieTrailerVsGenres } from "../servicess/functions";
import Modal from "../components/Modal/Modal";
import ReactPlayer from "react-player";

const HomeScreen = () => {
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

  return (
    <div className="homescreen" style={{ backgroundColor: "#111" }}>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={"true"}
        getMovie={(movie) => handleClickMovie(movie)}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Trending now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Comedy movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Hornor movies"
        fetchUrl={requests.fetchHornorMovies}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Romance movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        getMovie={(movie) => handleClickMovie(movie)}
        title="Documentarties"
        fetchUrl={requests.fetchDocumentaries}
      />

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

export default HomeScreen;
