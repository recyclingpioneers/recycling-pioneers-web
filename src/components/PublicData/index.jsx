import React from "react";
import arneet from "../../assets/headshot_arneet.jpg";
import misghana from "../../assets/headshot_misghana.jpg";
import simina from "../../assets/headshot_simina.jpg";
import kirk from "../../assets/headshot_kirk.jpg";
import { Carousel } from "react-bootstrap";
const Data = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Public Data</h1>
      </div>

      <Carousel className="container-fluid col-6 mx-auto col-md-10">
        <Carousel.Item>
          <img className="d-block h-100" src={arneet} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-100" src={kirk} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-100" src={misghana} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-100" src={simina} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fourthrd slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Data;
