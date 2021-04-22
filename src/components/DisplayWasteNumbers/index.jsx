import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import WasteIcon from "../../assests/WasteIcon.png";
import Card from 'react-bootstrap/Card'
import people from "../../assets/People.png";
import "./wasteNumbers.css";
import wasteData from "./wasteData.jsx";
// import "../Header/header.css";

//create a different file for FB data and import it. 
const WasteNumbers = () => {

    // const rowStyle ={
    //   display: "flex",
    //   justifyContent:"center",
    //   // height:"80vh",
    //   // background: "orange"
    // }
  
    return(
        <>
        <Container fluid>
          <Row as="div" className="rowStyle">
            <Col lg={7}>
              <img src={people} alt="The People" className="peopleIMG"/>
            </Col>
            <Col className="column2">
              <Card className="cardStyle">
                <Card.Body>
                  <Card.Title>
                    <span className="rotatingText">{wasteData[0].titleEN}</span>
                    <span className="rotatingText">{wasteData[0].titleFR}</span>
                  </Card.Title>
                  <br></br>
                  <Card.Text className="cardText">
                    <strong>{wasteData[0].textEN}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardStyle">
                <Card.Body>
                <Card.Title>
                  <span className="rotatingText">{wasteData[1].titleEN}</span>
                  <span className="rotatingText">{wasteData[1].titleFR}</span>
                </Card.Title>
                <br></br>
                  <Card.Text className="cardText">
                  <strong>{wasteData[1].textEN}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardStyle"> 
                <Card.Body>
                  <Card.Title>
                    <span className="rotatingText">{wasteData[2].titleEN}</span>
                    <span className="rotatingText">{wasteData[2].titleFR}</span>
                  </Card.Title>
                  <br></br>
                  <Card.Text className="cardText">
                  <strong>{wasteData[2].textEN}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col> 
          </Row>
        </Container>
        </> 
    );
}

export default WasteNumbers;