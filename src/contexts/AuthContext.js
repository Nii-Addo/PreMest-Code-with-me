import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [authState, setAuthState] = useState({
    token: null,
    expiresAt: null,
    userInfo: {},
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    setAuthState({
      token,
      userInfo,
      expiresAt,
    });
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const logout = () => {
    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: {},
    });
    history.push("/");
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
