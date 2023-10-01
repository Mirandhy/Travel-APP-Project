import "./bookings.css";

const Bookings = () => {
  // Sample data for  bookings
  const bookings = [
    {
      id: 1,
      location: "Paris",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      start_date: "10/02/2023",
      end_date: "10/02/2023",
    },
    {
      id: 2,
      location: "Kyoto",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      start_date: "10/02/2023",
      end_date: "10/02/2023",
    },
    {
      id: 3,
      location: "Seoul",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      start_date: "10/02/2023",
      end_date: "10/02/2023",
    },
    {
      id: 4,
      location: "New York",
      location_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      price: "$400",
      guide: "John Doe",
      start_date: "10/02/2023",
      end_date: "10/02/2023",
    },
  ];

  return (
    <div className="bookings">
      <h2>My Bookings</h2>
      <div className="booking-cards">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <img src={booking.location_img}></img>
            <h3>{booking.location}</h3>
            <p>
              <strong>Tour Begins</strong>: {booking.start_date}
            </p>
            <p>
              <strong>Tour Ends</strong>: {booking.end_date}
            </p>
            <p>
              <strong>Tour Guide</strong>:{booking.guide}
            </p>
            <p>
              <strong>Estimated Cost</strong>: {booking.price}
            </p>
            <button className="cancel-booking">Cancel Booking</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
