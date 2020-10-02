import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const withAuthorizedUser = (Component) => {
  return function AuthorizedComponent(props) {
    const authState = useContext(AuthContext);
    return (
      <div>{authState.isAuthenticated() ? <Component {...props} /> : null}</div>
    );
  };
};
export default withAuthorizedUser;
