import { NavLink } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./Tours.css";

const Tours = ({ user }) => {
  // Sample data for  bookings
  const bookings = [
    {
      id: 1,
      location: "Paris",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
    {
      id: 2,
      location: "Kyoto",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
    {
      id: 3,
      location: "Seoul",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
    {
      id: 4,
      location: "New York",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
    {
      id: 4,
      location: "New York",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
    {
      id: 4,
      location: "New York",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      booking_date: "10/02/2023",
    },
  ];

  return (
    <div className="container">
      <NavBar user={user}></NavBar>
      <div className="tours">
        <h2>Available Tours</h2>
        <div className="tour-search">
          <input
            type="text"
            placeholder="Search Locations..."
            value=""
            onChange={(e) => console.log(e.target.value)}
          />
          <button onClick={() => alert("search")}>Search</button>
        </div>
        <div className="tour-cards">
          {bookings.map((booking) => (
            <div key={booking.id} className="tour-card">
              <img src={booking.location_img}></img>
              <h3>{booking.location}</h3>
              <p>
                <strong>Tour Begins</strong>: {booking.booking_date}
              </p>
              <p>
                <strong>Tour Guide</strong>:{booking.guide}
              </p>
              <p>
                <strong>Estimated Cost</strong>: {booking.price}
              </p>
              <button className="view-location">
                <NavLink
                  to="/location/1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View Location
                </NavLink>
              </button>
              <button className="book-tour">Book Tour</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
