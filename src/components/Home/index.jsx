import React from "react";
import { withAuthorization } from "../Session";
import { FirebaseContext } from "../Firebase";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home</h1>

      <FirebaseContext.Consumer>
        {firebase => {
          return <div>{FirebaseContext.Consumer.$$typeof}</div>;
        }}
      </FirebaseContext.Consumer>
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
