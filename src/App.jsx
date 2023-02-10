import React from react;
import { HashRouter, Route, Routes }from "react-router-dom";
import { Home } from "./container";
import "./App.scss";
import CookieConsent from "react-cookie-consent";

const App = () => {
  return(
    <div className="app">
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
        </Routes>
      </HashRouter>
      <CookieConsent>This site uses cookies. By continuing to use this website, you agree to their use.</CookieConsent>
    </div>
  )
}

export default App;