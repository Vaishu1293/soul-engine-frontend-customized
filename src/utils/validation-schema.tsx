import * as Yup from 'yup';

// portfolio_schema

export const register_schema = Yup.object({
  name: Yup.string().required("firstname is required"),
  lastname: Yup.string().required("lastname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confrimpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  message: Yup.string().required().label("Message"),
 
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  username: Yup.string().required().label("UserName"),
});


