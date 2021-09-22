import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Login from "../login/Login";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href={"/"}>
        <img className="header-logo" src={Logo} alt={"logo bazar"} />
      </a>
      <div className="google-login">
        <Login />
      </div>
    </div>
  );
};

export default Header;
