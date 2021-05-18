import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../Contact";
import About from "../About";
import Footer from "../Footer";

//import { withFirebase } from "../Firebase";
// import logo from "../../assets/rp_logo.png";
// import nature from "../../assets/nature.jpg";
import nature from "../../assets/ID1.png";
import "./landing.css";
import Objective from "./Objective";
import contaminate from "../../assets/contaminationNew.png";
import educate from "../../assets/educateNew.png";
import optomize from "../../assets/optimizeNew.png";
import leafHand from "../../assets/leaf-hand.png";
import wasteIcon from "../../assets/WasteIcon.png";
import recycle from "../../assets/Footer-RP_website-icon.png";

const Landing = () => {
  return (
    <>
      <Carousel controls={false} indicators={true} slide={true} fade={false} fluid>
        <Carousel.Item interval={3000}>
          <div style={{padding:"0"}} className="imgcontainer">
            {/* <div style={{width:"100vw", height:"70vh"}}> */}
              <img style={{width:"100vw", height:"auto"}} src={nature}></img>
              <div className="centered">
                <h2 style={{fontSize:"2.5rem", fontWeight:"700", paddingBottom:"2%"}}><em>We are designing a Smart Bin!</em></h2>
                <h4 style={{fontSize:"1.5rem"}}>The Recycling Pioneers want to improve waste habits at Mcgill.</h4>
                {/* <button>Button</button> */}
              </div>
          </div>  
        </Carousel.Item>
      </Carousel>
      <section id="header" className="d-flex text-center mb-3">
        {/* <div className="container-fluid "> */}
        <Container fluid style={{padding:"0"}}>
          {/* <div className="row mx-auto"> */}
          <div style={{height:"100vh"}}>
            <div className="row justify-content-center">
              <div className="col-md-8 d-flex flex-column">
                <h1>Recycling Pioneers</h1>
                <br></br>
                <h2 style={{ fontSize: "1.3rem", textAlign:"justify", margin:"0 5%" }}>
                {/* className="text-center" */}
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

              {/* <div className="row justify-content-center"> */}
              <Container style={{paddingTop:"3%"}}>
                <Row className="rowStyle">
                  <Col style={{marginBottom:"3%"}}>
                  <Objective
                    name="Reducing the Recycling Contimanation Rate"
                    imgsrc={contaminate}
                  />
                  </Col>
                  <Col style={{marginBottom:"3%"}}>
                  <Objective
                    name="Optimize Waste Management Operations"
                    imgsrc={optomize}
                  />
                  </Col>
                  <Col style={{marginBottom:"3%"}}>
                  <Objective
                    name="Educate Community on Sustainable Waste Practices"
                    imgsrc={educate}
                  />
                  </Col>
                </Row>
              </Container>
              {/* </div> */}

              
            {/* <div className="justify-content-center"> */}
              <Row style={{paddingTop:"3%"}}>
              <Container>
              {/* style={{paddingTop:"3%"}}> */}
                <Row className="rowStyle">
                <Col style={{height:"100vh", background:"#f1f1f1", paddingTop:"5%", marginRight:"1%"}}>
                    {/* <Card> */}
                      {/* <Card.Body> */}
                        {/* <Card.Title className="text-center" style={{ fontWeight: "bold", fontSize: "1.2rem" }}> */}
                          <h2 style={{fontSize:"3.5rem", fontWeight:"900"}}><em><span style={{textDecoration:"underline #46CD0C"}}>Our</span> Mission</em></h2><br></br>
                          <Row style={{alignItems:"center", paddingRight:"5%" , paddingLeft:"5%"}}>
                            <Col lg="auto"><img src={wasteIcon}></img></Col>
                            <Col style={{textAlign:"justify", fontSize:"1.4rem", fontWeight:"600"}}><p><span style={{color:"#46CD0C"}}>Collect</span> data on waste and recycling at unique bin locations.</p></Col>
                          </Row><br></br>
                          <Row style={{alignItems:"center", paddingRight:"5%" , paddingLeft:"5%"}}>
                            <Col lg="auto"><img src={wasteIcon}></img></Col>
                            <Col style={{textAlign:"justify", fontSize:"1.4rem", fontWeight:"600"}}><p><span style={{color:"#46CD0C"}}>Optimize</span> environmental perfomances of buildings.</p></Col>
                          </Row><br></br>
                          <Row style={{alignItems:"center", paddingRight:"5%" , paddingLeft:"5%"}}>
                            <Col lg="auto"><img src={wasteIcon}></img></Col>
                            <Col style={{textAlign:"justify", fontSize:"1.4rem", fontWeight:"600"}}><p><span style={{color:"#46CD0C"}}>Create</span> better targeted waste reduction and diversion plans.</p></Col>
                          </Row><br></br>
          
                  
                          <button
                    id="theBtns"
                    className="btn btn-success"
                  >
                    Read More
                  </button>
                  
                   </Col>
                  <Col style={{height:"100vh", zIndex:"-1"}}>
                    <img style={{width:"100%", height:"auto"}} src={leafHand}/>
                  </Col>
               </Row>

              </Container>
            </Row>
            <div style={{background:"#264F09", padding:"2% 0"}}>
              
              <p style={{color:"white", fontSize:"2.4rem", fontWeight:"700"}}>How can we help?</p><br></br>
              <button id="theBtns" className="btn btn-success">Contact Us</button>
            
            </div>
            <div className="my-spacer py-5">
              <About />
            </div>

            <section style={{textAlign:"justify", padding:"0 10%", background:"#2D2C31", color:"white"}} className="py-5">
              <div>
                <Row>
                  <Col>
                    <img src={recycle} style={{width:"100%", height:"auto"}}></img>
                  </Col>
                  <Col style={{paddingRight:"5%", paddingLeft:"5%"}}>
                    <p style={{fontSize:"1.5rem"}}><strong>Who are we?</strong></p><br></br>
                    <p>A Mcgill affiliated group devotes to studying waste habits and reducing recycling contamination.</p>
                  </Col>
                  <Col>
                    <p style={{fontSize:"1.5rem"}}><strong>Contact Us</strong></p><br></br>
                    <p>+1 514 --- ----</p><br></br>
                    <p>info@recyclingpioneers.ca</p>
                  </Col>
                  <Col>
                    <p style={{fontSize:"1.5rem"}}><strong>Useful Link</strong></p>

                  </Col>

                </Row>
              </div>
            </section>
        <Footer />
            </div>

          </Container>
      </section>
    </>
  );
};

export default Landing;
