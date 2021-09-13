import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt={"logo bazar"} />
    </div>
  );
};

export default Header;
