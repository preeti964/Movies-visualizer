import { moviesData } from '../data/movieslist';
import MovieCard from './MovieCard';
import { CiSearch } from 'react-icons/ci';
import './movielist.css';
import { useState } from 'react';
import SideBar from './SideBar';

const MovieList = () => {

    const [sortrating, setsortrating] = useState(moviesData);
    const [movieGen, setMovieGen] = useState('');
    const [showData, setShowData] = useState(true);
    const sortImdb = () => {
        let arr1 = [];
        var arr = sortrating.sort((a, b) => {
            // if(abc=="imdbRating")
            return a.imdbRating - b.imdbRating;
        });
        for (let i of arr) {
            arr1.push(i);
        }
        setsortrating(arr1);
    };

    const sortYear = () => {
        let arr1 = [];
        var arr = sortrating.sort((a, b) => {
            return a.year - b.year;
        });
        for (let i of arr) {
            arr1.push(i);
        }
        setsortrating(arr1);
    }

    const actionHandler = (event) => {
        console.log(event.target.innerText);

        setMovieGen(event.target.innerText);
        if (event.target.innerText === 'All')
            setShowData(true);
        else
            setShowData(false);
    };

    const filter_data = sortrating.filter((xyz) => { return xyz.genres.includes(movieGen) });
    return (
        <div className="main-dashboard-container">
            <div className='left-dashboard-container'>
                <SideBar/>
            </div>
            <div className='right-dashboard-container'>
                <div className='search-container'>
                    <CiSearch className='search-icon' />
                    <input className='search-input' placeholder='Search...' />
                </div>

                <div className='parent-container'>
                    <div className='left-container'>
                        <p style={{ color: 'white', marginTop: '10px' }}>GENRES</p>
                        <hr />
                        <ul onClick={actionHandler} className='genres'>
                            <li >All</li>
                            <li >Action</li>
                            <li>Adventure</li>
                            <li>Biography</li>
                            <li>Comedy</li>
                            <li>Crime</li>
                            <li>Drama</li>
                            <li>History</li>
                            <li>Mystery</li>
                            <li>Scifi</li>
                            <li>Sport</li>
                            <li>Thriller</li>
                        </ul>

                    </div>

                    <div className='right-container'>
                        <div className='sort-container'>
                            <span>24 Movies</span>
                            <div className="dropdown m-1 left " >
                                <button
                                    className="btn btn-secondary dropdown-toggle sort-by"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort by
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" onClick={sortImdb}>
                                            imdb Rating
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={sortYear}>
                                            Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='movie-container'>
                            {
                                showData && sortrating.map((movie, index) => (
                                    <MovieCard movie={movie} key={index} />
                                ))
                            }

                            {!showData && filter_data.map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
