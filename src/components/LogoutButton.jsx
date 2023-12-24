import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logoutAuth } = useAuth();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        logoutAuth();
        navigate("/login");
        console.log("User logged out successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={handleLogout} className="logoutButton">
      Logout
    </button>
  );
};

export default LogoutButton;
