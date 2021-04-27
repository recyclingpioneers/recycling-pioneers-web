import React from "react";
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from "react-bootstrap";
import facts from "./facts.jsx";

const image = {
    // display:"block",
margin:"0 auto",
maxWidth:"100%",
height:"70vh",
textAlign:"center"
  } 

    const rowStyle ={
      display: "flex",
      justifyContent:"center",
      // height:"80vh",
      alignItems:"center",
    //   background: "orange"
    }
    const thefacts ={
        // position: "absolute",
        // bottom:"400px",
        // left:"90px",
        fontSize: "2rem",
        fontWeight: "300",
        border: "none",
        textAlign:"center"

    }

const WasteFacts = (props) => {
    return(
        <>
            <Container fluid>
                <Row as="div" style={rowStyle}>
                    <Col>
                        <Card style={thefacts}>
                            <Card.Body>
                            {(props.number==0 || props.number==1 || props.number==2) ? <Card.Text>
                                   {/* <pre style={thefacts}> */}
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
                        <img src={props.imgSource} alt="First Fact" style={image} ></img>
                    </Col>  
                    <Col>
                        <Card style={thefacts}>
                            <Card.Body>
                            {(props.number==3 || props.number==4 || props.number==5) ?  
                                <Card.Text>
                                   {/* <pre style={thefacts}> */}
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