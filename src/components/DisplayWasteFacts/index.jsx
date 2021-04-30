import React from "react";
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from "react-bootstrap";
import facts from "./facts.jsx";
import "./index.css";

const WasteFacts = (props) => {
    return(
        <>
            <Container fluid>
                <Row as="div" className="rowStyle">
                    <Col>
                        <Card border="light" className="thefacts">
                            <Card.Body>
                            {(props.number==0 || props.number==1 || props.number==2) ? 
                                <Card.Text>
                                   {facts[0][props.lang][props.number].text}
                                   <br></br>
                                   <span style={{color:facts[0][props.lang][props.number].color, fontWeight:"bold"}}>
                                   {facts[0][props.lang][props.number].stats}
                                   </span> 
                                </Card.Text> : <Card.Text></Card.Text>}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7}>
                        <img className="image" src={props.imgSource} alt="First Fact" ></img>
                    </Col>  
                    <Col>
                        <Card border="light" className="thefacts">
                            <Card.Body>
                            {(props.number==3 || props.number==4 || props.number==5) ?  
                                <Card.Text>
                                   {facts[0][props.lang][props.number].text}
                                   <br></br>
                                   <span style={{color:facts[0][props.lang][props.number].color, fontWeight:"bold"}}>
                                   {facts[0][props.lang][props.number].stats}
                                   </span> 
                                </Card.Text> : <Card.Text></Card.Text>}
                            </Card.Body>
                        </Card>
                    </Col>  
                </Row>
            </Container>
        </>
    );
}

export default WasteFacts;