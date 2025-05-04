// pages/Movies.jsx
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
// import MovieCard from "../components/MovieCard";
import SearchBox from "../components/SearchBox";
import GenreFilter from "../components/GenreFilter";
import "../styles/movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    
    const fetchMovies = async () => {
      try {
        
        const mockData = [
         
        ];

        setMovies(mockData);
        setFilteredMovies(mockData);

        // Extract unique genres
        const allGenres = mockData.flatMap((movie) => movie.genres);
        const uniqueGenres = [...new Set(allGenres)];
        setGenres(uniqueGenres);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    let results = movies;


    if (selectedGenre) {
      results = results.filter((movie) => movie.genres.includes(selectedGenre));
    }


    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (movie) =>
          movie.title.toLowerCase().includes(term) ||
          movie.genres.some((genre) => genre.toLowerCase().includes(term)) ||
          movie.actors.some((actor) => actor.toLowerCase().includes(term))
      );
    }

    setFilteredMovies(results);
  }, [selectedGenre, searchTerm, movies]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="movies-page container">
      <h1 className="page-title mb-4">Movie Collection</h1>

      <div className="row">
        <div className="col-md-3">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onSelectGenre={handleGenreSelect}
          />
        </div>

        <div className="col-md-9">
          <SearchBox onSearch={handleSearch} />

          {/* {filteredMovies.length === 0 ? (
            <div className="alert alert-info">No movies found matching your criteria.</div>
          ) : (
            <div className="row">
              {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )} */}

          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
