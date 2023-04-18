import React from "react";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import twitter from "../../assets/twitter.svg";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
	return (
		<div className='app__footer'>
			<div className="app__footer_content">
				<div className="app__footer_content_logo">
					<img src={logo} alt="" />
					<p>LearnDev Foundation</p>
				</div>
				<div className="app__footer_content_socials">
					<a href="mailto:learndevfoundation@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" /></a>
					<a href="https://github.com/learndev-foundation" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
					<a href="https://twitter.com/LearnDevFdn" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
				</div>
			</div>
			<div className="app__footer_bottom">
				<p className='top'>©2023, All right reserved.</p>
				<div className="app__footer_bottom_links">
					<p><Link to="/privacy">Privacy Policy</Link></p>
					<p className='center'><Link to="/tos">Terms of Service</Link></p>
					<p><Link to="/contribute">Contribute</Link></p>
				</div>
				<p className='bottom'>©2023, All right reserved.</p>
			</div>
		</div>
	);
};

export default Footer;