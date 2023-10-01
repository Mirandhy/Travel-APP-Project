import "./Home.css";
import FeaturedLocations from "../../components/featured-locations/featured-locations";
import Login from "../../components/login/Login";
import NavBar from "../../components/navbar/NavBar";

const Home = ({ user, setUser }) => {
  return (
    <div className="container">
      <NavBar user={user}></NavBar>
      <div className="hero-container">
        <div className="info-section">
          <h2>
            Find<br></br> The Perfect Tour
          </h2>
          <p>
            From thrilling escapades to cultural immersion, explore curated
            tours that match your unique travel style. Unforgettable experiences
            await.
          </p>
        </div>
        <Login setUser={setUser}></Login>
      </div>
      <FeaturedLocations></FeaturedLocations>
    </div>
  );
};

export default Home;
