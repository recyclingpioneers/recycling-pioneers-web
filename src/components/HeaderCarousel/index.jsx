import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import WasteIcon from "../../assets/WasteIcon.png";
import rplogo from "../../assets/RPLogo.png";
import "./header.css";

const Header = (props) => {
    return(
    <div>
        <Card>
          <Card.Header>
            <Container fluid> 
              <Row>
                <Col lg="auto">
                  <img src={rplogo} alt="Recycling Pioneers Logo" height="80"/>
                </Col> 
                <Col className="headerText">
                  <img src={WasteIcon} alt="waste icon" width="80" height="80"/>
                  {/* <div className="headerText">
                      <span className="rotatingText-adjective">{props.messageEN}</span>
                      <span className="rotatingText-adjective">{props.messageFR}</span>
                    </div> */}
                  <p>{props.message}</p>
                  <img src={WasteIcon} alt="waste icon" width="80" height="80"/>
                </Col>
              </Row>
            </Container>
          </Card.Header>
        </Card>
        </div>
    );
}

export default Header;