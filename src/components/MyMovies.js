import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MyMovies() {
    const [movies, setMovies] = useState([]);
    const [editingMovie, setEditingMovie] = useState(null);
    const [currentMovie, setCurrentMovie] = useState('');

    function addMovies() {
        setMovies([...movies, currentMovie]);
        setCurrentMovie('');
    }

    function removeMovies(index) {
        const newmovies = [...movies];
        newmovies.splice(index, 1);
        setMovies(newmovies);
    }

    function editMovie(index) {
        const movie = movies[index];
        setEditingMovie({ index, movie });
    }

    function updateMovie(updatedMovie) {
        const newmovies = [...movies];
        newmovies[editingMovie.index] = updatedMovie;
        setMovies(newmovies);
        setEditingMovie(null);
    }

    return (
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            {editingMovie ? (
                <form className='movie-app-container'>
                    <h1>My Movies</h1>

                    <input
                        type='text'
                        placeholder='Update movie'
                        value={editingMovie.movie}
                        onChange={(event) =>
                            setEditingMovie({
                                ...editingMovie,
                                movie: event.target.value,
                            })
                        }
                    />
                    <button
                        type='submit'
                        onClick={() => updateMovie(editingMovie.movie)}
                    >
                        Update Movie
                    </button>
                </form>
            ) : (
                <div className='movie-app-container'>
                    <h1>My Movies</h1>

                    <input
                        type='text'
                        name='movie'
                        placeholder='Add a new movie'
                        value={currentMovie}
                        onChange={(e) => setCurrentMovie(e.target.value)}
                    />
                    <button type='submit' onClick={addMovies}>
                        Add Movie
                    </button>
                </div>
            )}
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie}
                        <button onClick={() => editMovie(index)}>Edit</button>
                        <button onClick={() => removeMovies(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMovies;
