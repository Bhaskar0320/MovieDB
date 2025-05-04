
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>MovieDB</h5>
            <p>Your ultimate movie database and discovery platform.</p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/movies">Movies</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email@gmail.com</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} MovieDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;