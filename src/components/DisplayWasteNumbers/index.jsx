import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import people from "../../assets/People.png";
import "./wasteNumbers.css";
import wasteData from "./wasteData.jsx";

const WasteNumbers = (props) => {
 
    return(
        <>
        <Container fluid>
          <Row as="div" className="rowStyle">
            <Col lg={7}>
              <img src={people} alt="The People" className="peopleIMG"/>
            </Col>
            <Col className="column2">
              <Card border="success" className="cardStyle">
                <Card.Body>
                  <Card.Title style={{fontSize:"2rem"}}>
                    {wasteData[0][props.lang][0].title}
                  </Card.Title>
                  <Card.Text className="cardText">
                  {wasteData[0][props.lang][0].text}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="success" className="cardStyle">
                <Card.Body>
                <Card.Title style={{fontSize:"2rem"}}>
                {wasteData[0][props.lang][1].title}
                </Card.Title>
              
                  <Card.Text className="cardText">
                  {wasteData[0][props.lang][1].text}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="success" className="cardStyle"> 
                <Card.Body>
                  <Card.Title style={{fontSize:"2rem"}}>
                  {wasteData[0][props.lang][2].title}
                  </Card.Title>
                  
                  <Card.Text className="cardText">
                  {wasteData[0][props.lang][2].text}
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