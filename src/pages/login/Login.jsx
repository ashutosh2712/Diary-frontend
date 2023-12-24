import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const { loginAuth } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      console.log(data);

      setMessage({
        text: data.success ? "*You are logged in" : data.error,
        type: data.success ? "success" : "error",
      });

      if (data.success) {
        loginAuth();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setMessage({
        text: "*An error occur. Try again!",
        type: "error",
      });
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginFormWrapper">
        <h2 className="header">Secret Diary</h2>
        <p className="paragaph-one">Keep your thoughts freely and securely!</p>
        <p className="paragaph-one">Welcome back</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={formData.username}
            id="username"
            placeholder="Your Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            id="passowrd"
            placeholder="Your Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
        {message && (
          <p style={{ color: message.type === "success" ? "green" : "red" }}>
            {message.text}
          </p>
        )}
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
