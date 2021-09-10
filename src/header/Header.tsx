import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt={"Logo Bahzar"} />
    </div>
  );
};

export default Header;
