import React from "react";
import { withAuthorization } from "../Session";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home</h1>
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
