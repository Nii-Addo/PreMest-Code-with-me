import React from 'react'
import PropTypes from 'prop-types'
import '../css/HomeCss.css'
const AuthUserPage = ( props ) => {
  const getFiveSearches = props.getFiveSearches;
  const addSearchToQueue = props.addSearchToQueue;
  return ( <div>
      <h4>Your Last 5 searches</h4>
      <div>
      </div>
    </div> )
}
export default AuthUserPage