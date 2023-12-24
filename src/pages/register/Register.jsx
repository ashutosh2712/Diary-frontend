import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [messsage, setMessage] = useState(null);
  const navigate = useNavigate();
  const { loginAuth } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password != formData.confirmPassword) {
      setMessage({
        text: "*Password and Confirm password do not match",
        type: "error",
      });
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      console.log(data);

      setMessage({
        text: data.success ? "*User registered successfully" : data.error,
        type: data.success ? "success" : "error",
      });

      if (data.success) {
        loginAuth();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setMessage({
        text: "*An error occur.Try again!",
        type: "error",
      });
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerFormWrapper">
        <h2 className="header">Secret Diary</h2>
        <p className="paragaph-one">Keep your thoughts freely and securely!</p>
        <p className="paragaph-one">Interested? Sign In!</p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            value={formData.username}
            id="username"
            placeholder="Your Username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            placeholder="Your Email address"
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
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            id="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
        {messsage && (
          <p style={{ color: messsage.type === "success" ? "green" : "red" }}>
            {messsage.text}
          </p>
        )}
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
