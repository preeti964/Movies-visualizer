import './moviecard.css';
const MovieCard = ({ movie }) => {
    const { posterurl, title, imdbRating } = movie;
    let fallBackSrc =
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg';
    return (
        <div className='movie-card'>
            <img
                src={posterurl}
                onError={(e) =>
                    (e.target.onError = null)((e.target.src = fallBackSrc))
                }
                width='200px'
                alt='movie-name'
                className='movie_details'
            />
            <h4>{title}</h4>
            <span>{imdbRating}</span>
        </div>
    );
};

export default MovieCard;
