import "./Location.css";
import React, { useEffect, useState } from "react";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import axios from "axios"; // Import Axios for API requests
import NavBar from "../../components/navbar/NavBar";

const Location = ({ user }) => {
  const [locationData, setLocationData] = useState({
    image: "",
    description: "",
    latitude: 37.7749,
    longitude: -122.4194,
    weather: "",
  });

  useEffect(() => {
    // Fetch location data
    axios.get("https://api.example.com/location").then((response) => {
      const { image, description, latitude, longitude } = response.data;
      setLocationData({
        ...locationData,
        image,
        description,
        latitude,
        longitude,
      });

      // Initialize Leaflet map
      const map = L.map("map").setView([latitude, longitude], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      // Fetch weather data
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: latitude,
            lon: longitude,
            appid: "your_openweathermap_api_key",
          },
        })
        .then((weatherResponse) => {
          const weather = weatherResponse.data.weather[0].description;
          setLocationData({ ...locationData, weather });
        });
    });
  }, []);

  return (
    <div className="container">
      <NavBar user={user}></NavBar>
      <div className="location">
        <h2>Location</h2>
        <img src={locationData.image} alt="Location" />
        <p>Description: {locationData.description}</p>
        <p>Latitude: {locationData.latitude}</p>
        <p>Longitude: {locationData.longitude}</p>
        <p>Weather: {locationData.weather}</p>

        {/* Map container */}
        <div id="map" style={{ height: "300px" }}></div>
      </div>
    </div>
  );
};

export default Location;
