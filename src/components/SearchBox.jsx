// components/SearchBox.jsx
import { useState } from 'react';
// import '../styles/searchBox.css';


//search button working fine
const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    console.log("clicked handleSearch")
  };

  return (
    <form onSubmit={handleSearch} className="search-box mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies by title, genre, or actor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;