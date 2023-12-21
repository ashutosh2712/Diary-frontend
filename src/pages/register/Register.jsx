import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerFormWrapper">
        <h2 className="header">Secret Diary</h2>
        <p className="paragaph-one">Keep your thoughts freely and securely!</p>
        <p className="paragaph-one">Interested? Sign In!</p>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Username"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email address"
          />
          <input
            type="password"
            name="password1"
            id="passowrd1"
            placeholder="Your Password"
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your password"
          />
          <button type="submit">Register</button>
        </form>
        <p className="paragaph-one">
          Already have an account?{" "}
          <Link className="formLink" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
