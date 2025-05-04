// components/MovieList.jsx
import MovieCard from './MovieCard';
import '../styles/movieList.css';

//isme movie a prop pass kr dena
const MovieList = () => {

  // const MovieList =({movies}) => {
  //uske baad if condition  enable kar lena
  // if (movies.length === 0) {
    return (
      <div className="alert alert-info text-center">
        No movies found matching your criteria.
      </div>
    );
  // }


  // ye movie card bhi enable kr lena
  // return (
  //   <div className="movie-list">
  //     <div className="row">
  //       {movies.map(movie => (
  //         <MovieCard key={movie.id} movie={movie} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default MovieList;