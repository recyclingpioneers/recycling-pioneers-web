import React from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../Session";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../../src/constants/routes.js";

import logo from "../../assets/rp_long_logo.png";
import "./nav.css";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="col-10 mx-auto">
          <nav className="navbar sticky-top navbar-expand-md navbar-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand pt-3" to={ROUTES.LANDING}>
                <img src={logo} alt="rp_logo_long" loading="lazy" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.HOME}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.ADMIN}
                    >
                      Admin
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.MONITOR}
                    >
                      Monitor Data
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.CONTACT}
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.LANDING}
                    >
                      <SignOutButton />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const NavigationNonAuth = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="col-10 mx-auto">
          <nav className="navbar sticky-top navbar-expand-md navbar-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand pt-3" to={ROUTES.LANDING}>
                <img
                  src={logo}
                  width="230"
                  height="100%"
                  alt=""
                  loading="lazy"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.ABOUT}
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.PUBLICDATA}
                    >
                      Public Data
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.STAFFLOGIN}
                    >
                      Staff Login
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to={ROUTES.CONTACT}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
