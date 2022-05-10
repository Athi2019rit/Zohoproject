import React from "react";
import "../../Styles/LoginForm.css";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Link } from "react-router-dom";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="login-form">
      <div className="imgBr">
        <img className="login_image" src="sldie1.jpg" />
      </div>
      <div className="content">
        <div className="form">
          <h2 className="login-head">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputbx">
              <span className="span">Username</span>
              <input
                className="input"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && <p>{errors.username}</p>}
            <div className="inputbx">
              <span className="span">Password</span>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p>{errors.password}</p>}
            <div className="inputbx">
              <input className="input" type="submit" value="Sign in" />
            </div>
            <div className="inputbx">
              <p>
                Don't have an account? <Link to="/RegForm">Register</Link>
              </p>
            </div>
          </form>
          <h3>Login with social media</h3>
          <ul className="social">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
