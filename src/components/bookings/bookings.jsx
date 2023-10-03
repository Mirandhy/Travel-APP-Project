import "./bookings.css";
import { useEffect, useState } from "react";
import {
  getCustomerBookings,
  cancelCustomerBooking,
} from "../../utilities/bookings-api";

//props user/logged in
//usestate hook to manage bookings
const Bookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);

  const cancelBooking = async (bookingID) => {
    try {
      await cancelCustomerBooking(bookingID);
      alert("Tour Has Been Cancelled!");
      location.reload()
    } catch (error) {
      alert("Error, while cancelling your booking");
    }
  };

  useEffect(() => {
    const fetchBookingsFromAPI = async () => {
      const response = await getCustomerBookings(`${user._id}`);
      setBookings(response.bookings);
    };
    fetchBookingsFromAPI();
  }, []);

//each booking is displayed as a card. Maps over booking array
  return (
    <div className="bookings">
      <h2>My Bookings</h2>
      <div className="booking-cards"> 
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <img src={booking.tour.location.image}></img>
              <h3>{booking.tour.tour_name}</h3>
              <p>
                <strong>Tour Begins</strong>:
                {new Date(booking.tour.start_date).toDateString()}
              </p>
              <p>
                <strong>Tour Ends</strong>:
                {new Date(booking.tour.end_date).toDateString()}
              </p>
              <p>
                <strong>Tour Guide</strong>:
                {booking.tour.tour_guide.first_name +
                  " " +
                  booking.tour.tour_guide.last_name}
              </p>
              <p>
                <strong>Estimated Cost</strong>: ${booking.price}
              </p>
              <button
                className="cancel-booking"
                onClick={() => cancelBooking(booking._id)}
              >
                Cancel Booking
              </button>
            </div>
          ))
        ) : (
          <p>No Bookings yet, please book a tour first!</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
