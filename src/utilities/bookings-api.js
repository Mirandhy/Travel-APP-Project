import sendRequest from "./send-request";

const BASE_URL = "/api/bookings";

export function getCustomerBookings(customer_id) {
  return sendRequest(`${BASE_URL}/customers/${customer_id}`);
}
export function createCustomerBooking(data) {
  return sendRequest(`${BASE_URL}/`, "POST", data);
}
export function cancelCustomerBooking(bookingID) {
  return sendRequest(`${BASE_URL}/${bookingID}`, "DELETE");
}
