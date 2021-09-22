import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href={"/"}>
        <img className="header-logo" src={Logo} alt={"logo bazar"} />
      </a>
    </div>
  );
};

export default Header;
