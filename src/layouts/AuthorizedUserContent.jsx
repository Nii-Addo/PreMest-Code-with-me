import React from 'react'
import PropTypes from 'prop-types'
const withAuthorizedUser = ( Component ) => {
  return  function AuthorizedComponent(props) {
    const isAuthenticated= props.isAuthenticated;
    return ( <div>
          {isAuthenticated===true?<Component {...props}/> :null}
        </div> );
    }
}
export default withAuthorizedUser
