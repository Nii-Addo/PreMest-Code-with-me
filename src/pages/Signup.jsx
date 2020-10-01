import React, { useState, useContext } from "react";
import { Formik, useField, Form } from "formik";
import { Link, withRouter, Redirect } from "react-router-dom";
import signUpValidationSchema from "../components/helpers/getSignUpValidationSchema";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";
import axios from "axios";
import "../css/SignupCss.css";

const SignUpTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: "red", fontSize: "13px" }}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const SignInLink = styled.div`
  color: #1a73e8;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 36px;
  padding: 2px 10px;
  position: relative;
  width: 140px;
  height: 36px;

  &:hover {
    background-color: rgba(66, 133, 244, 0.26);
  }
`;

const ApplicationFormInputField = styled(SignUpTextField)`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 1rem;
  font-weight: 500;
  height: 0.5rem;
  letter-spacing: 0.012rem;
  margin-bottom: 0px;
  word-spacing: 0.16rem;
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 10px;

  .error {
  }
`;
const SignupSubmitButton = styled.button`
  padding: 0.25em 1em;
  display: block;
  background: none;
  background-color: #00a400;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  width: 85%;
  overflow: hidden;
  padding-left: 32px;
  padding-right: 32px;
  text-shadow: none;
  transition: all 0.2s ease-out 0s;
`;

const Signup = () => {
  const authContext = useContext(AuthContext);
  const [signupSuccess, setSignupSuccess] = useState();
  const [signupError, setSignupError] = useState();
  const [loginLoading, setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  return (
    <div className="signup-page">
      <div className="signup-page-mod">
        <div className="signup-page-heading">
          <p className="text-heading">Sign Up</p>
          <div>Create your Live-weather Account</div>
        </div>
        <div className="signup-page-form">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={async (values, actions) => {
              try {
                setLoginLoading(true);
                const userDto = {
                  fullName: values.fullName,
                  email: values.email,
                  password: values.password,
                  passwordConfirmation: values.passwordConfirmation,
                };

                axios
                  .post("http://localhost:5000/users/register", userDto)
                  .then((response) => {
                    authContext.setAuthState(response.data);
                    setSignupSuccess(response.data.message);
                    setSignupError("");
                    setRedirectOnLogin(true);
                  })
                  .catch((error) => {
                    setLoginLoading(false);
                    const data = error.response;
                    setSignupError(error);
                    setSignupSuccess("");
                  });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div>
              {redirectOnLogin && <Redirect to="/login" />}
              <Form>
                <div>
                  <ApplicationFormInputField
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-12">
                  <ApplicationFormInputField
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <ApplicationFormInputField
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <ApplicationFormInputField
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
                <br />
                <div className="signup-form-bottom">
                  <span className="agreement">
                    By clicking Sign Up, you agree to our Terms, Data Policy and
                    Cookies Policy.
                  </span>
                  <div className="mt-2">
                    <SignupSubmitButton
                      type="submit"
                      value="Submit"
                      className="btnSignup"
                    >
                      {loginLoading ? "Loading.." : "Sign Up"}
                    </SignupSubmitButton>
                  </div>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
        <br />
        <div className="signin-link-on-signup-form">
          Already registered?{" "}
          <SignInLink>
            <Link to="/login">Sign in instead</Link>
          </SignInLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
