import "./Tours.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import { getTours } from "../../utilities/tours-api";
import { createCustomerBooking } from "../../utilities/bookings-api";

const Tours = ({ user }) => {
  const [tours, setTours] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredTours, setFilteredTours] = useState([]); // State for filtered tours
  const navigate = useNavigate();

  const bookTour = async (tour) => {
    try {
      let booking = {
        price: tour.price,
        booking_date: new Date(),
        customer: user,
        tour: tour,
      };
      await createCustomerBooking(booking);
      alert("Tour Booked!");
      navigate("/");
    } catch (error) {
      alert("Error Occurred!");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchToursFromAPI = async () => {
      const response = await getTours();
      setTours(response.tours);
    };
    fetchToursFromAPI();
  }, []);

  // Update filteredTours whenever searchQuery changes
  useEffect(() => {
    const filtered = tours.filter((tour) =>
      tour.location.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTours(filtered);
  }, [searchQuery, tours]);

  return (
    <div className="container">
      <NavBar user={user}></NavBar>
      <div className="tours">
        <h2>Available Tours</h2>
        <div className="tour-search">
          <input
            type="text"
            placeholder="Search Tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          <button onClick={() => alert("search")}>Search</button>
        </div>
        <div className="tour-cards">
          {filteredTours.map((tour) => (
            <div key={tour._id} className="tour-card">
              <img src={tour.location.image}></img>
              <h3>{tour.location.name}</h3>
              <p>
                <strong>Tour Begins</strong>:{" "}
                {new Date(tour.start_date).toDateString()}
              </p>
              <p>
                <strong>Tour Ends</strong>:{" "}
                {new Date(tour.end_date).toDateString()}
              </p>
              <p>
                <strong>Tour Guide</strong>:
                {tour.tour_guide.first_name + " " + tour.tour_guide.last_name}
              </p>
              <p>
                <strong>Estimated Cost</strong>: ${tour.price}
              </p>
              <button className="view-location">
                <NavLink
                  to={`/location/${tour.location._id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View Location
                </NavLink>
              </button>
              {user ? (
                <button className="book-tour" onClick={() => bookTour(tour)}>
                  Book Tour
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
