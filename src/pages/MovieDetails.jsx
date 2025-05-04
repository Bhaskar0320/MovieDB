// pages/MovieDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/movieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
       
        const mockMovie = {
          id: 1,
          title: 'Inception',
          genres: ['Sci-Fi', 'Action', 'Thriller'],
          plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
          poster: 'https://via.placeholder.com/800x400?text=Inception',
          year: 2010,
          director: 'Christopher Nolan',
          actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
          rating: 8.8,
          duration: '148 min'
        };
        
        setMovie(mockMovie);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center my-5">Loading movie details...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="alert alert-info">Movie not found</div>;
  }

  return (
    <div className="movie-details container py-5">
      <Link to="/movies" className="btn btn-outline-secondary mb-4">
        &larr; Back to Movies
      </Link>
      
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={movie.poster} 
              className="img-fluid rounded-start" 
              alt={movie.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{movie.title} ({movie.year})</h1>
              
              <div className="mb-3">
                {movie.genres.map(genre => (
                  <span key={genre} className="badge bg-primary me-2">
                    {genre}
                  </span>
                ))}
                <span className="ms-2">
                  <i className="bi bi-star-fill text-warning"></i> {movie.rating}/10
                </span>
              </div>
              
              <p className="card-text">
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="card-text">
                <strong>Duration:</strong> {movie.duration}
              </p>
              <p className="card-text">
                <strong>Cast:</strong> {movie.actors.join(', ')}
              </p>
              
              <h4 className="mt-4">Plot</h4>
              <p className="card-text">{movie.plot}</p>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="similar-movies mt-5">
        <h3>You might also like</h3>
      </div>
    </div>
  );
};

export default MovieDetails;