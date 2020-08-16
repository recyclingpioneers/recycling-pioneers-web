import React from "react";
import { withAuthorization } from "../Session";

const Monitor = () => {
  return (
    <>
      <h1 className="text-center">Monitor Data</h1>
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Monitor);
