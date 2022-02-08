import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import About from "../About";
import Articles from "../Articles";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../../src/constants/routes.js";
import nature from "../../assets/ID1.png";
import "./landing.css";
import Objective from "./Objective";
import contaminate from "../../assets/contaminationNew.png";
import educate from "../../assets/educateNew.png";
import optomize from "../../assets/optimizeNew.png";
import leafHand from "../../assets/leaf-hand.png";
import wasteIcon from "../../assets/WasteIcon.png";
import people from "../../assets/People.png";
import mcgill from "../../assets/McGillLogoWhite.png";

const Landing = () => {
  return (
    <>
      <Carousel
        controls={false}
        indicators={true}
        slide={true}
        fade={false}
        fluid
      >
        <Carousel.Item interval={3000}>
          <div
            style={{ padding: "0" }}
            className="imgcontainer hide-for-mobile"
          >
            <img style={{ width: "100vw", height: "auto" }} src={nature}></img>
            <div className="centered">
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  paddingBottom: "2%"
                }}
              >
                <em>We are designing a Smart Bin!</em>
              </h2>
              <h4 style={{ fontSize: "1.5rem" }}>
                Our goal is to improve waste habits at McGill University through
                education and technology!
              </h4>
              {/* <button>Button</button> */}
            </div>
          </div>

          <div
            style={{ padding: "0" }}
            className="imgcontainer hide-for-laptops"
          >
            <img style={{ width: "100vw", height: "auto" }} src={nature}></img>
          </div>
        </Carousel.Item>
      </Carousel>

      <section id="header" className="d-flex text-center mb-3">
        <Container fluid style={{ padding: "0" }}>
          <div style={{ height: "100vh" }}>
            <div className="row justify-content-center">
              <div className="col-md-8 d-flex flex-column">
                <h1>Recycling Pioneers</h1>
                <br></br>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    textAlign: "justify",
                    margin: "0 5%"
                  }}
                >
                  At <strong className="brand-name">Recycling Pioneers</strong>,
                  we aim to revolutionize the waste platform at McGill
                  University. Driven by the common goals to improve waste habits
                  at McGill, we joined forces with the{" "}
                  <strong className="brand-name">
                    Building and Grounds Department{" "}
                  </strong>
                  to gather the data needed to make meaningful change. With
                  smart waste systems to acquire data, we believe the impact
                  systemic and public education can be tackled in a
                  comprehensive way. As a response to this problem, we are
                  developing and implementing a smart waste system that monitors
                  waste disposal habits at McGill and educates the public about
                  proper recycling.
                </h2>
              </div>
            </div>

            <Container style={{ paddingTop: "3%" }}>
              <Row className="rowStyle">
                <Col style={{ marginBottom: "4%" }}>
                  <Objective
                    name="Reducing the Recycling Contamination Rate"
                    imgsrc={contaminate}
                  />
                </Col>
                <Col style={{ marginBottom: "4%" }}>
                  <Objective
                    name="Optimize Waste Management Operations"
                    imgsrc={optomize}
                  />
                </Col>
                <Col style={{ marginBottom: "4%" }}>
                  <Objective
                    name="Educate Community on Sustainable Waste Practices"
                    imgsrc={educate}
                  />
                </Col>
              </Row>
            </Container>

            <Row style={{ paddingTop: "3%" }}>
              <Container className="hide-mission-mobile">
                <Row className="rowStyle">
                  <Col
                    style={{
                      height: "100vh",
                      background: "#f1f1f1",
                      paddingTop: "5%",
                      marginRight: "1%"
                    }}
                  >
                    <h2 style={{ fontSize: "3.5rem", fontWeight: "900" }}>
                      <em>
                        <span style={{ textDecoration: "underline #46CD0C" }}>
                          Our
                        </span>{" "}
                        Mission
                      </em>
                    </h2>
                    <br></br>
                    <Row
                      style={{
                        alignItems: "center",
                        paddingRight: "5%",
                        paddingLeft: "5%"
                      }}
                    >
                      <Col lg="auto">
                        <img src={wasteIcon}></img>
                      </Col>
                      <Col
                        style={{
                          textAlign: "justify",
                          fontSize: "1.4rem",
                          fontWeight: "600"
                        }}
                      >
                        <p>
                          <span style={{ color: "#46CD0C" }}>Collect</span> data
                          on waste and recycling at unique bin locations.
                        </p>
                      </Col>
                    </Row>
                    <br></br>
                    <Row
                      style={{
                        alignItems: "center",
                        paddingRight: "5%",
                        paddingLeft: "5%"
                      }}
                    >
                      <Col lg="auto">
                        <img src={wasteIcon}></img>
                      </Col>
                      <Col
                        style={{
                          textAlign: "justify",
                          fontSize: "1.4rem",
                          fontWeight: "600"
                        }}
                      >
                        <p>
                          <span style={{ color: "#46CD0C" }}>Optimize</span>{" "}
                          environmental perfomances of buildings.
                        </p>
                      </Col>
                    </Row>
                    <br></br>
                    <Row
                      style={{
                        alignItems: "center",
                        paddingRight: "5%",
                        paddingLeft: "5%"
                      }}
                    >
                      <Col lg="auto">
                        <img src={wasteIcon}></img>
                      </Col>
                      <Col
                        style={{
                          textAlign: "justify",
                          fontSize: "1.4rem",
                          fontWeight: "600"
                        }}
                      >
                        <p>
                          <span style={{ color: "#46CD0C" }}>Create</span>{" "}
                          better targeted waste reduction and diversion plans.
                        </p>
                      </Col>
                    </Row>
                    <br></br>

                    <button id="theBtns" className="btn btn-success">
                      Read More
                    </button>
                  </Col>
                  <Col style={{ height: "100vh", zIndex: "-1" }}>
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src={leafHand}
                    />
                  </Col>
                </Row>
              </Container>
            </Row>

            <div className="hide-mission-laptops">
              <h2 style={{ fontSize: "3.5rem", fontWeight: "900" }}>
                <em>
                  <span style={{ textDecoration: "underline #46CD0C" }}>
                    Our
                  </span>{" "}
                  Mission
                </em>
              </h2>
              <br></br>

              <Container>
                <Row
                  style={{
                    alignItems: "center",
                    paddingRight: "3%",
                    paddingLeft: "3%"
                  }}
                >
                  {/* <Col lg="auto"><img src={wasteIcon}></img></Col> */}
                  <Col
                    style={{ textAlign: "justify", fontSize: "1.4rem" }}
                    md={6}
                    xs={12}
                  >
                    <p>
                      <span style={{ color: "#46CD0C" }}>Collect</span> data on
                      waste and recycling at unique bin locations.
                    </p>

                    <p>
                      <span style={{ color: "#46CD0C" }}>Optimize</span>{" "}
                      environmental perfomances of buildings.
                    </p>

                    <p>
                      <span style={{ color: "#46CD0C" }}>Create</span> better
                      targeted waste reduction and diversion plans.
                    </p>
                  </Col>

                  <Col md={6} xs={12}>
                    <img src={people} style={{ width: "100%" }}></img>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="my-spacer py-5">
              <Articles />
            </div>

            <div style={{ background: "#264F09", padding: "2% 0" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "2.4rem",
                  fontWeight: "700"
                }}
              >
                How can we help?
              </p>
              <br></br>
              <NavLink to={ROUTES.CONTACT}>
                <button id="theBtns" className="btn btn-success">
                  Contact Us
                </button>
              </NavLink>
            </div>

            <div className="my-spacer py-5">
              <About />
            </div>

            <section
              style={{
                padding: "1% 0% 1% 0%",
                background: "#2D2C31",
                color: "white",
                height: "auto"
              }}
              className="py-auto"
            >
              <Container>
                <Row className="justify-content-md-center">
                  <Col
                    xs={6}
                    style={{
                      padding: "3%"
                    }}
                  >
                    <img src={mcgill} width="100%"></img>
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Landing;

/*
 <Col>
                    <p style={{ fontSize: "1.5rem" }}>
                      <strong>Useful Link</strong>
                    </p>
                  </Col>
                  */
