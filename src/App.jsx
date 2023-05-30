import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, About, Privacy, Cookie, Terms, Contribute, Conduct } from "./container";
import "./App.scss";
import CookieConsent from "react-cookie-consent";

const App = () => {
	return(
		<div className="app">
			<HashRouter>
				<Routes>
					<Route element={<Home />} path="/" exact />
					<Route element={<About />} path="/about"/>
					<Route element={<Privacy />} path="/privacy" />
					<Route element={<Cookie />} path="/cookie" />
					<Route element={<Terms />} path="/tos"/>
					<Route element={<Contribute />} path="/contribute"/>
					<Route element={<Conduct />} path="/codeofconduct"/>
				</Routes>
			</HashRouter>
			<CookieConsent>This site uses cookies. By continuing to use this website, you agree to their use.</CookieConsent>
		</div>
	);
};

export default App;