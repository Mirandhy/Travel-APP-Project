import sendRequest from "./send-request";

const BASE_URL = "/api/tours";

export function getTours() {
  return sendRequest(BASE_URL);
}

export function getTour(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
