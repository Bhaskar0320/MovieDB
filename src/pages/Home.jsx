import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/home.css';

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //dummy API call
    const fetchMovies = async () => {
      try {
      
        const mockData = [
          {
            id: 1,
            title: 'Inception',
            genres: ['Sci-Fi', 'Action'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            year: 2010,
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt']
          },
          {
            id: 1,
            title: 'Inception',
            genres: ['Sci-Fi', 'Action'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            year: 2010,
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt']
          },
          {
            id: 1,
            title: 'Inception',
            genres: ['Sci-Fi', 'Action'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            year: 2010,
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt']
          },
          {
            id: 1,
            title: 'Inception',
            genres: ['Sci-Fi', 'Action'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            year: 2010,
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt']
          },
          {
            id: 1,
            title: 'Inception',
            genres: ['Sci-Fi', 'Action'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            year: 2010,
            actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt']
          },
          
        ];
        
        setFeaturedMovies(mockData.slice(0, 3));
        setTrendingMovies(mockData.slice(3, 6));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="home-page">
      <section className="featured-movies mb-5">
        <h2 className="section-title">Featured Movies</h2>
        <div className="row">
          {featuredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="trending-movies">
        <h2 className="section-title">Trending Now</h2>
        <div className="row">
          {trendingMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;