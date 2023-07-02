import React from 'react';
import Row from '../components/Row';
import requests from '../requests.js';
import Nav from '../components/Nav.js';
import Banner from '../components/Banner';

const HomeScreen = () => {
    return (
        <div className='homescreen' style={{backgroundColor: '#111'}}>
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={'true'}/>
            <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Hornor movies" fetchUrl={requests.fetchHornorMovies}/>
            <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentarties" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default HomeScreen;
