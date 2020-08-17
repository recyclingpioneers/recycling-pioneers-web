import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";

import "./index.css";
import PasswordChangeForm from "./PasswordChange";
import SignUp from "./SignUp";

const Admin = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="my-4">
        {" "}
        <h1 className="text-center">Admin</h1>
        <div className="container align-items-center">
          <div className="row mt-4">
            <div className="col-md-6 mt-3">
              <h3 className="text-center">Change your password:</h3>
              <PasswordChangeForm />
            </div>
            <div className="col-md-6 mt-3">
              <h3 className="text-center">Add Admin:</h3>
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);
