import React from "react";
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from "react-bootstrap";

const image = {
    // display:"block",
margin:"0 auto",
maxWidth:"100%",
height:"70vh"
  } 

    const rowStyle ={
      display: "flex",
      justifyContent:"center",
      // height:"80vh",
      alignItems:"center",
    //   background: "orange"
    }

const WasteFacts = (props) => {
    return(
        <>
            <Container fluid>
                <Row as="div" style={rowStyle}>
                    {/* <Col> */}
                        {/* <Card> */}
                            {/* <Card.Body> */}
                                {/* <Card.Text as="h5" style={{textAlign:"center"}}> */}
                                    {/* Our Community contributes cksub osfg osigsugfo suogosu gosg osgdu gosg ogso gosg osg osgo gfsoigso  */}
                                {/* </Card.Text> */}
                            {/* </Card.Body> */}
                        {/* </Card> */}
                    {/* </Col> */}
                    <Col lg={7}>
                        <img src={props.imgSource} alt="First Fact" style={image} ></img>
                    </Col>        
                </Row>
            </Container>
        </>
    );
}

export default WasteFacts;