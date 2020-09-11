import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import '../css/LoginCss.css';
const Login = ( props ) => {
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();
  const [ redirectOnLogin, setRedirectOnLogin ] = useState( false );
  const authState = useContext( AuthContext );
  const handleUsernameChange = ( event ) => {
    const username = event.target.value;
    setUsername( username );
  }
  const handlePasswordChange = ( event ) => {
    const password = event.target.value;
    setPassword( password );
  }
  const login = () => {
    if ( username === 'admin@test.com' && password === 'password' ) {
      authState.setIsAuthenticated( true );
      setRedirectOnLogin( true );
    } else {
      authState.setIsAuthenticated( false );
    }
  }
  return ( <React.Fragment>
    {redirectOnLogin && <Redirect to="/"/>}
    <div className="login-page">
     <div className=" card login-form">
        <h3 className="login-header">Login</h3>
        <form onSubmit={login}>
          <div className="login-field-mod form-group">
            <input name='username' type="email" placeholder="username" className="form-control" onChange={handleUsernameChange}/>
          </div>
          <div className="login-field-mod form-group">
            <input name='password' type="password" placeholder="password" className="form-control" onChange={handlePasswordChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">Login</button>
          </div>
        </form>
        <div className="card-footer mt-4">
          <div className="d-flex flex-wrap justify-content-center">
            <Link to="" className="mr-4 signup-footer-link">Forgot your password?</Link>
            <Link to="/registration" className="signup-footer-link">Sign Up</Link>
          </div>
        </div>
        </div>
     </div>
  </React.Fragment> )
}
export default Login