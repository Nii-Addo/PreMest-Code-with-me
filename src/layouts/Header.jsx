import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { LoginButton, SignupButton, LogoutButton } from '../styledComponents/Divs';
import { AuthContext } from '../AuthContext';
import SearchBar from '../layouts/SearchBar';
import { Link } from 'react-router-dom';
import '../css/HomeCss.css';
const Header = ( props ) => {
  const searchTerm = props.searchTerm;
  const handleChange = props.handleChange;
  const placeholder = props.placeholder;
  const authState = useContext( AuthContext );
  const logout = authState.logout;
  return ( <div>
    <div className="top-div">
         <span className="app-name">Live-Weather</span>
         <div className="search-mod">
           <SearchBar searchTerm={searchTerm} handleChange={handleChange} placeholder={placeholder}/>
         </div>
         {!authState.isAuthenticated?
         <div className="login-mod">
           <LoginButton><Link to='/login'>Login</Link></LoginButton>
           <SignupButton>Sign up</SignupButton>
         </div>:
         <div className="login-mod"><LogoutButton onClick={logout}>Logout</LogoutButton></div>}
      </div>
    </div> )
}
export default Header