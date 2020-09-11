import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import withAuthorizedUser from '../layouts/AuthorizedUserContent'
import AuthUserPage from '../layouts/AuthUserPage';
import CurrentWeatherInfo from '../layouts/CurrentWeather';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../css/HomeCss.css';
const Home = ( props ) => {
  let queue = [];
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ isSearched, setIsSearched ] = useState( false );
  const [ currentLocationWeather, setCurrentLocationWeather ] = useState( {} );
  const [ term, setTerm ] = useState( "" );
  let tempData = {};
  const DisplayAuthContent = withAuthorizedUser( AuthUserPage );
  const handleChange = ( event ) => {
    const searchValue = event.target.value;
    setTerm( searchValue );
  }
  const addSearchToQueue = ( tempData ) => {
    queue.push( tempData );
  }
  const getFiveSearches = () => {}
  useEffect( () => {
    //first get user geolocation
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( ( position ) => {
        let newCoords = [
          position.coords.latitude,
           position.coords.longitude
        ]
        const coordintates = newCoords.toString();
        //make Api call
        const params = {
          access_key: process.env.REACT_APP_API_API_ACCESS_KEY,
          query: coordintates,
        }
        axios.get( 'http://api.weatherstack.com/current', { params } )
          .then( ( response ) => {
            setIsLoaded( true );
            let weatherValues = {
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
            setCurrentLocationWeather( weatherValues );
          } )
          .catch( ( error ) => {
            setIsLoaded( true );
            console.log( error );
          } );
      } )
    } else {
      console.log( "Not supported" );
    }
  }, [] ); { /*end of useEffect*/ }
  const searchTerm = () => {
    const params = {
      access_key: process.env.REACT_APP_API_API_ACCESS_KEY,
      query: term
    }
    axios.get( 'http://api.weatherstack.com/current', { params } )
      .then( ( response ) => {
        setIsSearched( true );
        let weatherValues = {
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
        setCurrentLocationWeather( weatherValues );
        addSearchToQueue( { tempData: weatherValues } );
      } )
      .catch( ( error ) => {
        console.log( error );
        setIsSearched( true );
      } )
  }; { /*end of searchTerm*/ };
  if ( !isLoaded ) {
    return <div>Loading...</div>;
  } else {
    return ( <React.Fragment>
    <div>
      <Header searchTerm={searchTerm} handleChange={handleChange} placeholder={currentLocationWeather.city}/>
    </div>
    <div className="current-weather">
      <CurrentWeatherInfo currentLocationWeather={currentLocationWeather} isSearched={isSearched}/>
    </div>
    <div className="authenticated-content">
      <DisplayAuthContent getFiveSearches={getFiveSearches} addSearchToQueue={addSearchToQueue}/>
    </div>
  </React.Fragment> );
  }
}
export default withRouter( Home );