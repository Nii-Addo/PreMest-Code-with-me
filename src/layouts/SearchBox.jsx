import React from 'react';
import PropTypes from 'prop-types';
import { Searchbox, SearchButton } from '../styledComponents/Divs';
import '../App.css';
const SearchElement = ( props ) => {
  const handleChange = props.handleChange;
  const search=props.search;
  return (
    <React.Fragment>
      <div  className="left">
        <Searchbox placeholder={props.currentLocationWeather.city} name="searchTerm" type="text" className="box" onChange={handleChange}></Searchbox>
      </div>
      <div className="left">
        <SearchButton type="submit" onClick={search}>Search</SearchButton>
      </div>
    </React.Fragment>)
}
export default SearchElement
