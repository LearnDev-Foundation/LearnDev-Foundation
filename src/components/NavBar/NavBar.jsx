import React, { useState, useRef, useEffect } from "react";
import Notification from "../Notification/Notification";
import navLogo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (
				navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
			) {
				setNavbarOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, [navbarOpen]);
  

	return (
		<div>
			<Notification />

			<div className="app__navbar" ref={ref}>
				<div className="app__navbar_logo">
					<img src={navLogo} alt="" />
					<p>LearnDev Foundation</p>
				</div>
				<div className="app__navbar_hamburger">
					<FontAwesomeIcon icon={faBars} beat className='.app__navbar_hamburger-icon' onClick={() => setNavbarOpen((prev) => !prev)}/>
					<ul className={`hamburger ${navbarOpen ? "show-hamburger" : ""}`}>
						<li onClick={() => setNavbarOpen(false)}><Link to="/">Home</Link></li>
						<li onClick={() => setNavbarOpen(false)}><Link to="/about">About</Link></li>
						<li onClick={() => setNavbarOpen(false)}><a href="#">Academy</a></li>
						<li onClick={() => setNavbarOpen(false)}><a href="#">Blog</a></li>
					</ul>
				</div>
				<div className="app__navbar_menu">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><a href="#">Academy</a></li>
						<li><a href="#">Blog</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;