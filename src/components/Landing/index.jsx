import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import { withFirebase } from "../Firebase";
import logo from "../../assets/rp_logo.png";
import { NavLink } from "react-bootstrap";
import * as ROUTES from "../../../src/constants/routes.js";

const Landing = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> Smart Tech, Smart Habits </h1>
                  <h2 className="my-3" style={{ fontSize: "1.3rem" }}>
                    At{" "}
                    <strong className="brand-name">Recycling Pioneers</strong>,
                    we aim to revolutionize the waste platform at McGill
                    University.
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      type="button"
                      to={ROUTES.ABOUT}
                      className="btn-get-started"
                    >
                      Visit the Data
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={logo}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
