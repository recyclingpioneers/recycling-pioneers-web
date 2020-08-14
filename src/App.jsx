import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation";
import LandingPage from "./components/Landing";
import AdminPage from "./components/Admin";
import AboutPage from "./components/About";
import DataPage from "./components/Data";
import ContactPage from "./components/Contact";
//import Footer from "./components/Footer";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      <Route exact path={ROUTES.DATA} component={DataPage} />
      <Route exact path={ROUTES.CONTACT} component={ContactPage} />

      <Redirect to={ROUTES.LANDING} />
    </div>
  </Router>
);

export default App;
