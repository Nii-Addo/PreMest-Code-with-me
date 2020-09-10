import React from 'react'
import PropTypes from 'prop-types';
import {LoginButton,SignupButton} from '../styledComponents/Divs';
import SearchElement from '../layouts/SearchBox';
import CurrentWeatherInfo from '../layouts/CurrentWeather';
import '../App.css';

const PublicPage = (props) => {
  const currentLocationWeather=props.currentLocationWeather;
  const handleChange=props.handleChange;
  const search=props.search;
  return (
    <div className="public">
      <div className="top-div">
         <span className="app-name">Live-Weather</span>
         <div className="login-mod">
           <LoginButton>Login</LoginButton>
           <SignupButton>Sign up</SignupButton>
         </div>
      </div>
      <div className="search-mod">
        <SearchElement currentLocationWeather={currentLocationWeather} handleChange={handleChange} search={search}/>
      </div>
      <div className="current-weather">
        <CurrentWeatherInfo currentLocationWeather={currentLocationWeather}/>
      </div>
    </div>
  )
}

export default PublicPage
