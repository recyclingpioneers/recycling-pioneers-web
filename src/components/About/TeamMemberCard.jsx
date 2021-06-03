import React from "react";
import { Card } from "react-bootstrap";

const TeamMemberCard = props => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3 mx-auto">
        <Card
          border="success"
          style={{ borderWidth: "2.4px", height: "100%", borderRadius: "2rem" }}
        >
          <Card.Img
            mx-auto
            style={{
              borderRadius: "50%",
              width: "100%",
              textAlign: "center",
              padding: "4%"
            }}
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
          />
          <Card.Body>
            <div className="card-body">
              <Card.Title
                className="text-center"
                style={{ fontWeight: "700", fontSize: "1.7rem" }}
              >
                {props.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 mt-2 text-center"
                style={{ fontWeight: "600", color: "#46CD0C" }}
              >
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
