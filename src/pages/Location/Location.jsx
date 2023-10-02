import "./Location.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import { getLocation } from "../../utilities/locations-api";

const Location = ({ user }) => {
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  let { locationID } = useParams();

  useEffect(() => {
    const fetchLocationByID = async (locationID) => {
      const response = await getLocation(locationID);
      setLocationData(response.location);
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${response.location.lat}&longitude=${response.location.lon}&current_weather=true`
        )
        .then((weatherResponse) => {
          console.log(weatherResponse);
          setWeatherData(weatherResponse.data.current_weather);
        });
    };
    fetchLocationByID(locationID);
  }, []);

  return (
    <div className="container">
      <NavBar user={user}></NavBar>
      <div className="location">
        <h2>{locationData.name}</h2>
        <h3>{new Date(weatherData.time).toLocaleTimeString()} </h3>
        <h3>{1.8 * weatherData.temperature + 32} &#8457; </h3>
        <img src={locationData.image} alt="Location" />
        <p>{locationData.description}</p>
      </div>
    </div>
  );
};

export default Location;
