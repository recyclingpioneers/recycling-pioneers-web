import React from "react";
import { Card } from "react-bootstrap";

const ArticleCard = props => {
  return (
    <>
      <div className=" col-xs-12 col-md-6 mx-auto">
        <Card
          border="success"
          style={{
            borderWidth: "2.4px",
            height: "100%",
            alignItems: "center",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem"
          }}
        >
          <Card.Img
            mx-auto
            style={{
              width: "100%",
              textAlign: "center"
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
                {props.article_headline}
              </Card.Title>
              <hr></hr>

              <blockquote className="blockquote mb-0">
                <p className="font-italic"> {props.summary} </p>
                <footer className="blockquote-footer">{props.publisher}</footer>
              </blockquote>
            </div>

            <button
              id="theBtns"
              className="btn btn-success"
              onClick={e => {
                e.preventDefault();
                window.location.href =
                  "https://giving.mcgill.ca/all-stories/smart-approach-examining-what-goes-waste-bins";
              }}
            >
              Read Article
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ArticleCard;
