import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { AuthContext } from '../AuthContext';
const withAuthorizedUser = ( Component ) => {
  return function AuthorizedComponent( props ) {
    const authState = useContext( AuthContext );
    const isAuthenticated = authState.isAuthenticated;
    return ( <div>
          {isAuthenticated===true?<Component {...props}/> :null}
        </div> );
  }
}
export default withAuthorizedUser