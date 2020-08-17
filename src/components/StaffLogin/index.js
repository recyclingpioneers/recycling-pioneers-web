import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import "./index.css";

const SignInPage = () => (
  <div>
    <div className="my-5">
      <h1 className="text-center">Staff Login</h1>
    </div>
    <SignInForm />
    <div className="my-3 text-center">
      <PasswordForgetLink />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email:
                </label>
                <input
                  class="form-control"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="email"
                  placeholder="james@mcgill.ca"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password:
                </label>
                <input
                  class="form-control"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="charlotte123"
                />
              </div>

              {error && <p className="alert-danger">{error.message}</p>}

              <div className="col-12 text-center">
                <button
                  id="signinBtn"
                  className="btn btn-success"
                  disabled={isInvalid}
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
