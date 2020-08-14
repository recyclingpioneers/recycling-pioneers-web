import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberData from "./TeamMemberData";

const About = () => {
  return (
    <>
      <div className="my-4">
        {" "}
        <h1 className="text-center">Meet the Team</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row gy-4">
              {TeamMemberData.map((val, ind) => {
                return (
                  <TeamMemberCard
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
