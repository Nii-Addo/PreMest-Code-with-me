import React from "react";
import { HistoryWeather } from "../../components/styledComponents/Divs";
import "../../css/HistoryCss.css";

const HistoryWeatherInfo = (props) => {
  const {
    country,
    city,
    weather_icons,
    temperature,
    feelslike,
    wind_degree,
    cloudcover,
  } = props.history;
  return (
    <React.Fragment>
      <HistoryWeather>
        <div className="mb-2">
          {city},{country}
        </div>
        <br />
        <div className="history-details">
          <div className="history-weather-icon">
            <img src={weather_icons} alt="weather-icon" />
          </div>
          <div className="history-details-stats">
            <div>temperature: {temperature}℃</div>
            <div>Wind Degree: {wind_degree}°</div>

            <div>Feels Like: {feelslike}℃</div>
            <div>Cloud Cover: {cloudcover} okta</div>
          </div>
        </div>
      </HistoryWeather>
    </React.Fragment>
  );
};
export default HistoryWeatherInfo;
