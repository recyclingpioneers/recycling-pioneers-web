import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./index.css";

const DataCard = props => {
  return (
    <>
      <Card border={props.border}>
        <Card.Header className="text-center">{props.name}</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">
              Distance to Top: {props.distance}cm
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              Weight: {props.weight}kg
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataCard;
