import React from "react";
import PropTypes from "prop-types";
import { Searchbox, SearchButton } from "../styledComponents/Divs";
import "../../css/HomeCss.css";
const SearchBar = (props) => {
  const handleChange = props.handleChange;
  const searchTerm = props.searchTerm;
  const placeholder = props.placeholder;
  return (
    <React.Fragment>
      <div className="left">
        <Searchbox
          placeholder={placeholder}
          name="term"
          type="text"
          className="box"
          onChange={handleChange}
        ></Searchbox>
      </div>
      <div className="left">
        <SearchButton type="submit" onClick={searchTerm}>
          Search
        </SearchButton>
      </div>
    </React.Fragment>
  );
};
export default SearchBar;
