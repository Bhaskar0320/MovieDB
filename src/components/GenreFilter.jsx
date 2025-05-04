


const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <div className="genre-filter mb-4">
      <h5>Filter by Genre</h5>
      <div className="d-flex flex-wrap">
        <button
          className={`btn btn-sm m-1 ${!selectedGenre ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onSelectGenre(null)}
        >
          All
        </button>
        {genres.map(genre => (
          <button
            key={genre}
            className={`btn btn-sm m-1 ${selectedGenre === genre ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;