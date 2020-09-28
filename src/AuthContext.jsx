import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
const AuthContext = createContext();
const { Provider } = AuthContext;
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const logout = () => {
    setIsAuthenticated(false);
    history.push("/");
  };
  return (
    <Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthProvider, AuthContext };
