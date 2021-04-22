import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
// import WasteIcon from "../../assests/WasteIcon.png";
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
                {/* <div className="header"> */}
                  {/* <Col lg="auto">
                    <img src={WasteIcon} alt="waste icon" width="80" height="80"/>
                  </Col> */}
                  <Col> 
                    <div className="headerText">
                      <span className="rotatingText-adjective">{props.messageEN}</span>
                      <span className="rotatingText-adjective">{props.messageFR}</span>
                    </div>
                  </Col>                          
                  {/* <Col lg="auto">
                    <img src={WasteIcon} alt="waste icon" width="80" height="80"/>
                  </Col> */}
                {/* </div> */}
              </Row>
            </Container>
          </Card.Header>
        </Card>
        </div>
    );
}

export default Header;