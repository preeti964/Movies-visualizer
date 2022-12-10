const Genres = ({ handleGenreChange }) => {
    return (
        <>
            <p style={{ color: 'white', marginTop: '10px' }}>GENRES</p>
            <hr />
            <ul onClick={handleGenreChange} className='genres'>
                <li>All</li>
                <li>Action</li>
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
        </>
    );
};
export default Genres;
