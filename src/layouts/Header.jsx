import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  LoginButton,
  SignupButton,
  LogoutButton,
  HistoryButton,
} from "../styledComponents/Divs";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";
import "../css/HomeCss.css";

const Header = (props) => {
  const searchTerm = props.searchTerm;
  const handleChange = props.handleChange;
  const authState = useContext(AuthContext);
  const logout = authState.logout;
  return (
    <div>
      <div className="top-div">
        <span className="app-name">Live-Weather</span>
        {!authState.isAuthenticated ? (
          <div className="login-mod">
            <LoginButton>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </LoginButton>
            <Link to="/regsitration">
              <SignupButton>Sign up</SignupButton>
            </Link>
          </div>
        ) : (
          <div className="login-mod">
            <div>
              <LogoutButton onClick={logout}>Logout</LogoutButton>
            </div>
            <div>
              <Link to="/history">
                <HistoryButton>History</HistoryButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
