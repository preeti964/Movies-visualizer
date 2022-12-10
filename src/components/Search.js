import { CiSearch } from 'react-icons/ci';

const Search = ({ searchText, handleSearch }) => {
    return (
        <div className='search-container'>
            <CiSearch className='search-icon' />
            <input
                className='search-input'
                placeholder='Search...'
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;
