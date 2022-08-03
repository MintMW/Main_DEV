import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import homeImage from "../../assets/home-img.png";
import logo from "../../assets/logo.png";
import Dfinity from "../../assets/dfinity.png";
import Summon from "./Summon";

function Header() {
  return (
  <BrowserRouter>
    <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
          <Link to="/"><img className="header-logo-11" src={logo} /></Link>
          <div className="header-vertical-9"></div>
          <div className="header-empty-6"></div>
          <button className="button-56" role="button">
          <Link to="/summon">
            MINT YOUR NFT
          </Link>
          </button>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="button-85" role="button">
          <Link to="/">
           AUTHENTICATE  <img className="footer-logo" src={Dfinity} />
          </Link>
          </button>
        </div>
      </header>
    </div>
    <Switch>
        <Route exact path="/">
          <img className="bottom-space" src={homeImage} />
        </Route>
        <Route path="/summon">
          <Summon />
        </Route>
        
      </Switch>
  </BrowserRouter>
  );
}

export default Header;


