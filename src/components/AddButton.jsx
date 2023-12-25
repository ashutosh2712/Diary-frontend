import React from "react";
import { Link } from "react-router-dom";
import Add from "../assets/add.png";
const AddButton = () => {
  return (
    <Link to="/entries/new" className="button-float">
      <img src={Add} alt="" className="button-img" />
    </Link>
  );
};

export default AddButton;
