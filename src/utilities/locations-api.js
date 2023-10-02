import sendRequest from "./send-request";

const BASE_URL = "/api/locations";

export function getLocations() {
  return sendRequest(BASE_URL);
}

export function getLocation(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
