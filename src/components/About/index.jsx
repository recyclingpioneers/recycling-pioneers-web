import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberData from "./TeamMemberData";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="mb-5">
        {" "}
        <h1 className="text-center">Meet the Team</h1>
      </div>

      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-12 mx-auto px-4">
            <div className="row gy-4 gx-3">
              {TeamMemberData.map((val, ind) => {
                return (
                  <TeamMemberCard
                    className="display-1"
                    id="cards"
                    key={ind}
                    imgsrc={val.imgsrc}
                    name={val.name}
                    summary={val.summary}
                    role={val.role}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
