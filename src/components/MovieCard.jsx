import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/movieCard.css';

const MovieCard = () => {
  const [showFullTitle, setShowFullTitle] = useState(false);

  const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem vel cumque facilis enim, 
  ipsum sunt recusandae. Voluptatem quos corrupti repellendus natus quaerat recusandae atque rerum tenetur aliquid, 
  numquam totam! Esse quasi dolor illum, sapiente veniam ducimus perspiciatis iste adipisci doloremque alias, 
  soluta hic nulla dignissimos.`;

  // Split into words and slice first 100
  const words = title.split(' ');
  const preview = words.slice(0, 50).join(' ');
  const isLong = words.length > 50;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 movie-card">
        <img 
          src="https://th.bing.com/th/id/OIP.hvGHw2fnZ3UP8X4otNl7FwHaEK?cb=iwc1&rs=1&pid=ImgDetMain"
          className="card-img-top" 
          alt="movie name"
        />
        <div className="card-body">
          <h5 className="card-title">Interstellar</h5>
          <p className="card-text">
            {showFullTitle ? title : preview}
            {isLong && (
              <span
                style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                onClick={() => setShowFullTitle(!showFullTitle)}
              >
                {showFullTitle ? ' Show less' : '... Read more'}
              </span>
            )}
          </p>
          <div className="genre-badges">Movie Badge</div>
        </div>
        <div className="card-footer">
          <Link className="btn btn-primary" to="/details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
