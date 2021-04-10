import React from "react";
import "./Header.css";

import TeslaLogo from "../assets/teslaLogo.svg";


const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="tesla logo" />
      </div>

      <div className="header__center">
        <p>model S</p>
        <p>model 3</p>
        <p>model x</p>
        <p>model y</p>
        <p>model solar roof</p>
        <p>solar panels</p>
      </div>
      
      <div className="header__right">
          <p>Shop</p>
          <p>Tesla Account</p>
      </div>
      
    </div>
  );
};

export default Header;
