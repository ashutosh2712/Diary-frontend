import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginFormWrapper">
        <h2 className="header">Secret Diary</h2>
        <p className="paragaph-one">Keep your thoughts freely and securely!</p>
        <p className="paragaph-one">Welcome back</p>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Username"
          />
          <input
            type="password"
            name="password1"
            id="passowrd1"
            placeholder="Your Password"
          />

          <button type="submit">Login</button>
        </form>
        <p className="paragaph-one">
          Don't have an account?{" "}
          <Link className="formLink" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
