import React from "react";
import ReguseForm from "./Reguseform";
import validate from "./Regvalidate";
import { Link } from "react-router-dom";
const Registerform = (submitForm) => {
  const { handleChange, handleSubmit, values, Regerrors } = ReguseForm(
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
          <h2 className="login-head">Register</h2>
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
            {Regerrors.username && <p>{Regerrors.username}</p>}
            <div className="inputbx">
              <span className="span">Email</span>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {Regerrors.email && <p>{Regerrors.email}</p>}
            <div className="inputbx">
              <span className="span">Password</span>
              <input
                className="input"
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {Regerrors.password && <p>{Regerrors.password}</p>}
            <div className="inputbx">
              <span className="span">Confirm Password</span>
              <input
                className="input"
                type="password"
                name="cpassword"
                value={values.cpassword}
                onChange={handleChange}
              />
            </div>
            {Regerrors.cpassword && <p>{Regerrors.cpassword}</p>}
            <div className="inputbx">
              <input className="input" type="submit" value="Sign in" />
            </div>
            <div className="inputbx">
              <p>
                Already have a account ?<Link to="/Login">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
