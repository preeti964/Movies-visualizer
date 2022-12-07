import { moviesData } from '../data/movieslist';
import MovieCard from './MovieCard';
import { CiSearch } from 'react-icons/ci';
import './movielist.css';

const MovieList = () => {
    return (
        <div className="main-dashboard-container">
            <div className='left-dashboard-container'>BM</div>
            <div className='right-dashboard-container'>
                <div className='search-container'>
                    <CiSearch className='search-icon' />
                    <input className='search-input' placeholder='Search...' />
                </div>

                <div className='parent-container'>
                    <div className='left-container'>
                        <p style={{color:'red',marginTop:'10px'}}>GENRES</p>
                        <hr/>
                        <ul className='genres'>
                            <li>All</li>
                            <li>Action</li>
                            <li>Adventure</li>
                            <li>Biography</li>
                        </ul>

                    </div>

                    <div className='right-container'>
                        <div className='sort-container'>
                            <span>24 Movies</span>
                            <span>SORT BY:
                            
                            <select className="" aria-label="Default select example">
                                    <option>Latest</option>
                                    <option value="1">Imdb Rating</option>
                                </select></span>
                        </div>

                        <div className='movie-container'>
                            {moviesData.map((movie, index) => (
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
