import React, {useState, useEffect} from 'react';
import axios from './axios';
import './css/Row.css'

const base_url = 'https://image.tmdb.org/t/p/original'

const Row = (props) => {
    const {title, fetchUrl} = props

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-poster'>

                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className='poster'
                        src={`${base_url}${movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
        </div>
    );
}

export default Row
