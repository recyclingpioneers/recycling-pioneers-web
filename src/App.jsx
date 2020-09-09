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
import HomeDetailsPage from "./components/Home";
import AdminPage from "./components/Admin";
import MonitorPage from "./components/Monitor";
import PasswordForgetPage from "./components/PasswordForget";
import TESTER from "./components/Tester";

//import Footer from "./components/Footer";

import { withAuthentication } from "./components/Session";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.STAFFLOGIN} component={StaffLoginPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.PUBLICDATA} component={PublicDataPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.HOMEDETAILS} component={HomeDetailsPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.MONITOR} component={MonitorPage} />
      <Route path={ROUTES.TESTER} component={TESTER} />
      <Route path={ROUTES.PASSWORDFORGET} component={PasswordForgetPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
