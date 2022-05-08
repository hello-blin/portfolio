import React from "react";
// import {state, useState} from 'react'
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

function Header() {

  return (
    <div className="header__navbar">
      <div className="navbar__logo">
        <h2 className="logo">Blin</h2>
      </div>
      <div className="navbar__menu">
        <div className="navbar-menu__links">
          <ul className="menu__links">
            {["Get Started", "About Me", "Skills", "Contact Me"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="navbar__menu-hamburger">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
