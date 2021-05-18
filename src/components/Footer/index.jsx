import React from "react";
import {Row, Col, Card } from "react-bootstrap";
import logo from "../../assets/rp_logo.png";
const Footer = () => {
  return (
    <>
      <footer className="text-center font-smaller mt-5" style={{paddingBottom:"2%"}}>
        <img src={logo}/><br></br>
        <i style={{color:"#44CE04", padding:"2%"}} class="fa fa-twitter fa-lg" aria-hidden="true"></i>
        <i style={{color:"#44CE04", padding:"2%"}} class="fa fa-instagram fa-lg" aria-hidden="true"></i>
        <i style={{color:"#44CE04", padding:"2%"}} class="fa fa-facebook fa-lg" aria-hidden="true"></i>
        <i style={{color:"#44CE04", padding:"2%"}} class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        <p>&copy;2021 <strong>Recycling Pioneers</strong>. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
