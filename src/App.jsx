import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import LandingPage from "./components/Landing";
import StaffLoginPage from "./components/StaffLogin";
import AboutPage from "./components/About";
import PublicDataPage from "./components/PublicData";
import ContactPage from "./components/Contact";
import HomePage from "./components/Home";
import AdminPage from "./components/Admin";
import MonitorPage from "./components/Monitor";
import PasswordForgetPage from "./components/PasswordForget";

//import Footer from "./components/Footer";

import { withAuthentication } from "./components/Session";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.STAFFLOGIN} component={StaffLoginPage} />
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      <Route exact path={ROUTES.PUBLICDATA} component={PublicDataPage} />
      <Route exact path={ROUTES.CONTACT} component={ContactPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.MONITOR} component={MonitorPage} />

      <Route
        exact
        path={ROUTES.PASSWORDFORGET}
        component={PasswordForgetPage}
      />
    </div>
  </Router>
);

export default withAuthentication(App);
