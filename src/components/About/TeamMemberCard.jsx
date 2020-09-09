import React from "react";
import { Card } from "react-bootstrap";

const TeamMemberCard = props => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3 mx-auto">
        <Card border="success">
          <Card.Img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
          />
          <Card.Body>
            <div className="card-body">
              <Card.Title
                className="text-center"
                style={{ fontWeight: "bold" }}
              >
                {props.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                {props.role}
              </Card.Subtitle>
              <Card.Text className="text-center">{props.summary}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default TeamMemberCard;
