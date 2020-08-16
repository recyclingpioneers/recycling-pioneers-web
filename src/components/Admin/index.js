import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";

import PasswordChangeForm from "../PasswordChange";

const Admin = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="my-4">
        {" "}
        <h1 className="text-center">Admin</h1>
        <div>
          <h3>Change your password:</h3>
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);
