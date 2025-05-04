// pages/About.jsx
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page container py-5">
      <h1 className="page-title mb-4">About MovieDB</h1>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card about-card">
            <div className="card-body">
              <h2 className="card-title">Our Story</h2>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                veritatis voluptas, quam quia quos expedita qui delectus
                eligendi, rem, obcaecati in! Sequi aperiam quas architecto
                similique! Sapiente impedit in fuga?
              </p>

              <h2 className="card-title mt-4">Features</h2>
              <ul className="features-list">
                <li>Browse thousands of movies</li>
                <li>Search by title, genre, or actor</li>
                <li>Filter movies by various criteria</li>
                <li>View detailed information about each movie</li>
              </ul>

              <h2 className="card-title mt-4">The Team</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                ab totam consequuntur beatae fugit amet commodi a dolorem facere
                reprehenderit voluptate temporibus corrupti voluptatibus illum,
                unde dicta perferendis eum quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
