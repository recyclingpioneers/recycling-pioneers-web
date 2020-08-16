import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import { withFirebase } from "../Firebase";
import logo from "../../assets/rp_logo.png";
import "./landing.css";
import Objective from "./Objective";
import waste from "../../assets/waste_icon.png";
import educate from "../../assets/educate_icon.png";
import audit from "../../assets/audit_icon.png";

const Landing = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="col-12 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-4 header-img">
                <img src={logo} className="img-fluid" alt="home img" />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8 pt-1 pt-md-1 d-flex flex-column">
                <h2 className="text-center" style={{ fontSize: "1.3rem" }}>
                  At <strong className="brand-name">Recycling Pioneers</strong>,
                  we aim to revolutionize the waste platform at McGill
                  University. Driven by the common goals to improve waste habits
                  at McGill, we joined forces with the{" "}
                  <strong className="brand-name">Building and Grounds </strong>
                  department to gather the data needed to make meaningful
                  change. With smart waste systems to acquire data, we believe
                  the impact systemic and public education can be tackled in a
                  comprehensive way. As a response to this problem, we are
                  developing and implementing a smart waste system that monitors
                  waste disposal habits at McGill and educates the public about
                  proper recycling.
                </h2>
              </div>
            </div>

            <div className="row justify-content-center gy-4 mx-auto mt-3">
              <div className="col-md-3 col-sm-4">
                <Objective name="Higher Accuracy Waste Audits" imgsrc={audit} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Objective name="Educate & Encourage McGill" imgsrc={educate} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Objective
                  name="Increased Waste Diversion Rates"
                  imgsrc={waste}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
