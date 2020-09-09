import React from "react";
import { withAuthorization } from "../Session";
import DataCard from "./DataCard";
import "./index.css";

import sorting_poster from "../../assets/4_stream_sorting_poster.png";
import educate_poster from "../../assets/educate_poster.png";
import standard from "../../assets/signage_standardization.png";

const Monitor = props => {
  return (
    <>
      <div className="container-fluid my-container">
        <div className="row my-row">
          <div className="col-sm-12 my-carousel mx-auto ">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide carousel-fade "
              data-ride="carousel"
              data-interval="10000"
              data-pause="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={sorting_poster}
                    class="d-block h-100 w-auto"
                    alt="Sorting Poster"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    src={educate_poster}
                    class="d-block h-100 w-auto"
                    alt="Educate Poster"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    src={standard}
                    class="d-block h-100 w-auto"
                    alt="Standardization Poster"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row card-row mt-3 mb-2 gy-0">
          <div className="col-6 col-md-3 gy-0">
            <DataCard
              border="dark"
              name="Trash"
              distance={props.WD}
              weight={props.WW}
            />
          </div>
          <div className="col-6 col-md-3">
            <DataCard
              border="dark"
              name="Compostable"
              distance={props.CD}
              weight={props.CW}
            />
          </div>
          <div className="col-6 col-md-3">
            <DataCard
              border="primary"
              name="Paper & Cardboard"
              distance={props.RD}
              weight={props.RW}
            />
          </div>
          <div className="col-6 col-md-3">
            <DataCard
              border="warning"
              name="Plastic, Glass & Metal"
              distance={props.PD}
              weight={props.PW}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Monitor);
