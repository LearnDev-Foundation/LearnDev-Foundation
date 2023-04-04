import React from 'react';
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import twitter from "../../assets/twitter.svg";

import './Footer.scss';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className="app__footer_content">
        <div className="app__footer_content_logo">
          <img src={logo} alt="" />
          <p>LearnDev Foundation</p>
        </div>
        <div className="app__footer_content_socials">
          <a href="#"><img src={email} alt="" /></a>
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
        </div>
      </div>
      <div className="app__footer_bottom">
        <p className='top'>©2023, All right reserved.</p>
        <div className="app__footer_bottom_links">
          <p><a href="#">Privacy Policy</a></p>
          <p className='center'><a href="#">Terms of Service</a></p>
          <p><a href="#">Contribute</a></p>
        </div>
        <p className='bottom'>©2023, All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer