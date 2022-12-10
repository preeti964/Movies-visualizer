import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieList from './components/MoviesList';
import Login from './components/Login';
import Register from './components/Register';
import MyMovies from './components/MyMovies';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<MovieList />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/my-movies' element={<MyMovies />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
