import React, { useState, useEffect } from 'react';
import withAuthorizedUser from './layouts/AuthorizedUserContent'
import axios from 'axios';
import PublicPage from './pages/PublicPage';
import AuthUserPage from './pages/AuthUserPage';
import './App.css';

function App() {
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ isSearched, setIsSearched ] = useState( false );
  const [ isAuthenticated, setIsAuthenticated ] = useState( true );
  const [ currentLocationWeather, setCurrentLocationWeather ] = useState( {} );
  const [ searchResult, setSearchResult ] = useState( [] );
  const [ searchTerm, setSearchTerm ] = useState( "" );
  const DisplayAuthContent = withAuthorizedUser( AuthUserPage );
  const handleChange = ( event ) => {
    const searchValue = event.target.value;
    setSearchTerm( searchValue );
  }
  const search = () => {
    const params = {
      access_key: process.env.REACT_APP_API_API_ACCESS_KEY,
      query: searchTerm
    }
    axios.get( 'http://api.weatherstack.com/current', { params } )
      .then( ( response ) => {
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
        setSearchResult( weatherValues );
        setIsSearched( true );
      } )
      .catch( ( error ) => {
        console.log( error );
        setIsSearched( true );
      } )
  }
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
  }, [] )
  if ( !isLoaded ) {
    return <div>Loading...</div>;
  } else {
    if ( !isSearched ) {
      return ( <div className="App">
                <PublicPage currentLocationWeather={currentLocationWeather} handleChange={handleChange} search={search}/>
                <div className="authenticated-content">
                  <DisplayAuthContent isAuthenticated={isAuthenticated}/>
                </div>
               </div> );
    } else {
      return ( <div className="App">
                <PublicPage currentLocationWeather={searchResult} handleChange={handleChange} search={search} isSearched={isSearched}/>
                <div className="authenticated-content">
                  <DisplayAuthContent isAuthenticated={isAuthenticated}/>
                </div>
               </div> );
    }
  }
}
export default App;
/*

*/