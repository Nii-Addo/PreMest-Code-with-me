import React, { useContext } from "react";
import {
  LoginButton,
  SignupButton,
  LogoutButton,
  HistoryButton,
} from "../styledComponents/Divs";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "../../css/HomeCss.css";

const Header = (props) => {
  const authState = useContext(AuthContext);
  const logout = authState.logout;
  return (
    <div>
      <div className="top-div">
        <div>
          <span className="app-name">Live-Weather</span>
        </div>
        <div>
          {authState.isAuthenticated() ? (
            <div className="button-group">
              <div>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </div>
              <div>
                <Link to="/history">
                  <HistoryButton>History</HistoryButton>
                </Link>
              </div>
            </div>
          ) : (
            <div className="button-group">
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
