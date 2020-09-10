import React from 'react';
import PropTypes from 'prop-types';
import { Searchbox, SearchButton } from '../styledComponents/Divs';
import '../App.css';
const SearchElement = ( props ) => {
  const handleChange = props.handleChange;
  const search=props.search;
  return ( <form onSubmit={search}>
    <div  className="left">
      <Searchbox placeholder={props.currentLocationWeather.city} name="searchTerm" type="text" className="box" onChange={handleChange}></Searchbox>
    </div>
    <div className="left">
      <SearchButton type="submit">Search</SearchButton>
    </div>
  </form> )
}
export default SearchElement
