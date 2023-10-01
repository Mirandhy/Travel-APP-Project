//users-service.js
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  const response = await usersAPI.signUp(userData);
  return response;
}

export async function login(credentials) {
  const data = await usersAPI.login(credentials);

  // Persist the token
  localStorage.setItem("token", data.token);

  return getUser();
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");

  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}

export function getUser() {
  const token = getToken(); // either returns the token if exists and valid or return null
  // const payload = JSON.parse(atob(token.split('.')[1]))

  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return (
    usersAPI
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}
