import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <div>
    <div className="my-5">
      <h1 className="text-center">Forgot Password</h1>
    </div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={this.onSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Please enter the email address associated with your account.
                  If your account exists, you'll recieve an email to change your
                  password:
                </label>
                <input
                  class="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              {error && <p style={{ color: "red" }}>{error.message}</p>}
              <div className="col-12 text-center">
                <button
                  id="forgotBtn"
                  className="btn btn-success"
                  disabled={isInvalid}
                  type="submit"
                >
                  Reset My Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORDFORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
