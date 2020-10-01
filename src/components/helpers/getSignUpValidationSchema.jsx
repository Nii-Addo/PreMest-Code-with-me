import * as Yup from "yup";
const signUpValidationSchema = (values) => {
  const lowercaseRegex = /(?=.*[a-z])/;
  return Yup.object().shape({
    fullName: Yup.string()
      .min(3, "First name is too short")
      .required("First name is required"),
    email: Yup.string()
      .lowercase()
      .email("E-mail is not valid!")
      .required("E-mail is required!"),
    password: Yup.string()
      .matches(lowercaseRegex, "one lower case required")
      .min(8, "Password has to be longer than 6 characters!")
      .required("Password is required!"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords are not the same!")
      .required("Confirm Password !"),
  });
};
export default signUpValidationSchema;
