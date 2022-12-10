import { moviesData } from '../data/movieslist';
import MovieCard from './MovieCard';
import { useState } from 'react';
import SideBar from './SideBar';
import Search from './Search';
import Genres from './Genres';
import './movielist.css';

const MovieList = () => {
    const [allData, setAllData] = useState(moviesData);
    const [filteredData, setFilteredData] = useState(moviesData);
    const [searchText, setSearchText] = useState('');

    const handleSorting = (key) => {
        let arr1 = [];
        var arr = allData.sort((a, b) => {
            return a[key] - b[key];
        });
        for (let i of arr) {
            arr1.push(i);
        }
        setFilteredData(arr1);
    };

    const handleGenreChange = (event) => {
        const filtered_data = allData.filter((data) =>
            data.genres.includes(event.target.innerText)
        );

        if (event.target.innerText === 'All') {
            setFilteredData(allData);
        } else {
            setFilteredData(filtered_data);
        }
    };

    const handleSearch = (val) => {
        setSearchText(val);
        let filtered_data = allData;
        if (val === '') {
            setFilteredData(allData);
        } else {
            filtered_data = allData.filter((data) => data.title.includes(val));
            setFilteredData(filtered_data);
        }
    };

    return (
        <div className='main-dashboard-container'>
            <div className='left-dashboard-container'>
                <SideBar />
            </div>
            <div className='right-dashboard-container'>
                <Search searchText={searchText} handleSearch={handleSearch} />

                <div className='parent-container'>
                    <div className='left-container'>
                        <Genres handleGenreChange={handleGenreChange} />
                    </div>

                    <div className='right-container'>
                        <div className='sort-container'>
                            <span>24 Movies</span>
                            <div className='dropdown m-1 left '>
                                <button
                                    className='btn btn-secondary dropdown-toggle sort-by'
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Sort by
                                </button>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <span
                                            className='dropdown-item'
                                            onClick={() =>
                                                handleSorting('imdbRating')
                                            }
                                        >
                                            imdb Rating
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className='dropdown-item'
                                            onClick={() =>
                                                handleSorting('year')
                                            }
                                        >
                                            Year
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='movie-container'>
                            {filteredData.map((movie, index) => (
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
