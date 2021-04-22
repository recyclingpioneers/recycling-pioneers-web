import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/McGillLogoWhite.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footerStyle">
        <Container fluid>
          <Row>
            <Col>
              <div>
                <img src={logo} alt="McGill Logo" width="400" height="100%" />
              </div>
            </Col>
            <Col>
              <pre className="footerText">
                {`Visit our website:\n`}
                <strong>{`recyclingpioneers.ca`}</strong>
              </pre>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
