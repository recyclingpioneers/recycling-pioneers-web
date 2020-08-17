import React from "react";
import { Card } from "react-bootstrap";
import "./landing.css";

const Objectives = props => {
  return (
    <>
      <Card border="success" className="obj-img img-fluid">
        <Card.Img
          src={props.imgsrc}
          variant="top"
          className="card-img-top"
          alt={props.imgsrc}
        />
        <Card.Body>
          <div className="card-body">
            <Card.Title
              className="text-center"
              style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {props.name}
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Objectives;
