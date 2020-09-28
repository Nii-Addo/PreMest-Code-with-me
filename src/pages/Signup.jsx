import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import "../css/LoginCss.css";

const FormLoginInputField = styled.input`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 0.87rem;
  font-weight: 400;
  height: 0.5rem;
  letter-spacing: 0.012rem;
  margin-bottom: 20px;
  word-spacing: 0.16rem;
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
`;

const SigninSubmitButton = styled.button`
  padding: 0.25em 1em;
  display: block;
  background: none;
  background-color: #00a400;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 100%;
  width: 87%;
  overflow: hidden;
  padding-left: 32px;
  padding-right: 32px;
  text-shadow: none;
  transition: all 0.2s ease-out 0s;
  float: right;
  margin-right: 67px;

  &:hover {
    border: 1px solid;
  }
`;

const Signup = (props) => {
  const [errorMessage, setErrorMessage] = useState();
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const authState = useContext(AuthContext);

  const handleFullnameChange = (event) => {
    const fullName = event.target.value;
    setFullname(fullName);
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const signup = () => {
    if (email === "admin@test.com" && password === "password") {
      authState.setIsAuthenticated(true);
      setRedirectOnLogin(true);
    } else {
      authState.setIsAuthenticated(false);
      setErrorMessage("Wrong Email or password");
    }
  };

  return (
    <React.Fragment>
      {redirectOnLogin && <Redirect to="/login" />}
      <div className="login-page">
        <div className="login-form">
          <h3 className="login-header">Signup</h3>
          <form onSubmit={signup}>
            <div>{errorMessage && <div>{errorMessage}</div>}</div>
            <div>
              <FormLoginInputField
                name="fullName"
                type="text"
                placeholder="Full name"
                onChange={handleFullnameChange}
              />
            </div>
            <div>
              <FormLoginInputField
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <FormLoginInputField
                name="password"
                type="password"
                placeholder="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <SigninSubmitButton type="submit">Submit</SigninSubmitButton>
            </div>
          </form>
          <div className="signup-link">
            <Link to="/login" className="signup-footer-link">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Signup;
