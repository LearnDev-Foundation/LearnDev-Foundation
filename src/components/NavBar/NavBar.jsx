import React from 'react';
import { images } from "../../constants";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="Logo" />
            <p>LearnDev Foundation</p>
        </div>
        <div className="app__navbar-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              Academy
            </li>
            <li>
              Blog
            </li>
            <li>
              About
            </li>
          </ul>
        </div>
        <div className="app__navbar-menu_line" />
        <div className="app__navbar-social">
          <a href="">
            <img src={images.facebook} alt="" />
          </a>
          <a href="">
            <img src={images.github} alt="" />
          </a>
          <a href="">
            <img src={images.linkedin} alt="" />
          </a>
          <a href="">
            <img src={images.twitter} alt="" />
          </a>
        </div>
        <div className="app__navbar-menu_line" />
        
    </div>
  )
}

export default NavBar