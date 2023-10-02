import { useEffect, useState } from "react";
import "./featured-locations.css";
import { NavLink } from "react-router-dom";
import { getLocations } from "../../utilities/locations-api";

const FeaturedLocations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchLocationsFromAPI = async () => {
      const response = await getLocations();
      setLocations(response.locations);
    };
    fetchLocationsFromAPI();
  }, []);

  return (
    <div className="featured-locations">
      <h2>Featured Locations</h2>
      <div className="location-cards">
        {locations.map((location) => (
          <div key={location._id} className="location-card">
            <img src={location.image} alt={location.name} />
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <button className="view-location">
              <NavLink
                to={`/location/${location._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                View Location
              </NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLocations;
