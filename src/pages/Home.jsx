import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Header from "../layouts/Header";
import CurrentWeatherInfo from "../layouts/CurrentWeather";
import axios from "axios";
import { HistoryContext } from "../HistoryContext";
import { Link } from "react-router-dom";
import SearchBar from "../layouts/SearchBar";
import "../css/HomeCss.css";

const Home = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLocationWeather, setCurrentLocationWeather] = useState({});
  useEffect(() => {
    //get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = [position.coords.latitude, position.coords.longitude];
        const coordintates = newCoords.toString();

        const params = {
          access_key: process.env.REACT_APP_API_API_ACCESS_KEY,
          query: coordintates,
        };
        axios
          .get("http://api.weatherstack.com/current", { params })
          .then((response) => {
            setIsLoaded(true);
            let initialWeatherValues = {
              city: response.data.location.name,
              country: response.data.location.country,
              weather_icons: response.data.current.weather_icons,
              temperature: response.data.current.temperature,
              description: response.data.current.description,
              wind_speed: response.data.current.wind_speed,
              wind_direction: response.data.current.wind_direction,
              wind_degree: response.data.current.wind_degree,
              pressure: response.data.current.pressure,
              precipitation: response.data.current.precip,
              humidity: response.data.current.humidity,
              cloudcover: response.data.current.cloudcover,
              feelslike: response.data.current.feelslike,
              uv_index: response.data.current.uv_index,
              visibility: response.data.current.visibility,
            };
            setCurrentLocationWeather(initialWeatherValues);
          })
          .catch((error) => {
            setIsLoaded(true);
            console.log(error);
          });
      });
    } else {
      console.log("Not supported");
    }
  }, []);

  const [isSearched, setIsSearched] = useState(false);
  const [term, setTerm] = useState("");
  const historyContext = useContext(HistoryContext);
  const handleChange = (event) => {
    const searchValue = event.target.value;
    setTerm(searchValue);
  };
  const searchTerm = () => {
    const params = {
      access_key: process.env.REACT_APP_API_API_ACCESS_KEY,
      query: term,
    };
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        setIsSearched(true);
        let searchedWeatherValues = {
          city: response.data.location.name,
          country: response.data.location.country,
          weather_icons: response.data.current.weather_icons,
          temperature: response.data.current.temperature,
          description: response.data.current.description,
          wind_speed: response.data.current.wind_speed,
          wind_direction: response.data.current.wind_direction,
          wind_degree: response.data.current.wind_degree,
          pressure: response.data.current.pressure,
          precipitation: response.data.current.precip,
          humidity: response.data.current.humidity,
          cloudcover: response.data.current.cloudcover,
          feelslike: response.data.current.feelslike,
          uv_index: response.data.current.uv_index,
          visibility: response.data.current.visibility,
        };
        setCurrentLocationWeather(searchedWeatherValues);
        historyContext.setSearchHistory((searchHistory) => [
          ...searchHistory,
          searchedWeatherValues,
        ]);
      })
      .catch((error) => {
        console.log(error);
        setIsSearched(true);
      });
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <div>
          <Header searchTerm={searchTerm} handleChange={handleChange} />
        </div>
        <div>
          <div className="search-mod">
            <SearchBar
              searchTerm={searchTerm}
              handleChange={handleChange}
              placeholder={currentLocationWeather.city}
            />
          </div>
        </div>
        <div className="current-weather">
          <CurrentWeatherInfo currentLocationWeather={currentLocationWeather} />
        </div>
      </React.Fragment>
    );
  }
};
export default Home;
