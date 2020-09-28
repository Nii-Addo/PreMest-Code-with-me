import React from "react";
import PropTypes from "prop-types";
import { CurrentWeather, WeatherItem } from "../styledComponents/Divs";
import "../css/HomeCss.css";
const CurrentWeatherInfo = (props) => {
  const {
    country,
    city,
    wind_speed,
    humidity,
    precipitation,
    uv_index,
    visibility,
    pressure,
    weather_icons,
    temperature,
    feelslike,
    wind_degree,
    cloudcover,
  } = props.currentLocationWeather;

  return (
    <React.Fragment>
      {props.currentLocationWeather.length === 0 ? (
        "null"
      ) : (
        <CurrentWeather>
          <div>
            <div className="basics">
              <WeatherItem>Wind: {wind_speed}mph</WeatherItem>
              <WeatherItem>Humidity: {humidity}%</WeatherItem>
              <WeatherItem>Precipitation: {precipitation}</WeatherItem>
              <WeatherItem>UV Index: {uv_index}</WeatherItem>
              <WeatherItem>Visibility: {visibility}+mi</WeatherItem>
              <WeatherItem>Pressure: {pressure}mb</WeatherItem>
            </div>
            <div className="further-details">
              <div className="current-weather-icon">
                <img src={weather_icons} alt="weather-icon" />
              </div>
              <div className="further-details-stats">
                <div>temperature: {temperature}℃</div>
                <div>Wind Degree: {wind_degree}</div>
                <div className="alt">
                  <div>Feels Like: {feelslike}</div>
                  <div>Cloud Cover: {cloudcover}</div>
                </div>
              </div>
            </div>
          </div>
        </CurrentWeather>
      )}
    </React.Fragment>
  );
};
export default CurrentWeatherInfo;
