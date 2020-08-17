import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.INITIAL_STATE
    };
  }

  INITIAL_STATE = {
    fullname: "",
    email: "",
    message: "",
    error: null
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "official_template",
        e.target,
        "user_bSNUNwa3cqIsxF9wPCvlH"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("We got your message! We will email you back shortly.");
  }

  render() {
    const { fullname, email, message, error } = this.state;
    const isInvalid = fullname === "" || email === "" || message === "";

    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>

        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={this.sendEmail}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    What's your name?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="fullname"
                    onChange={this.onChange}
                    placeholder="James McGill"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Provide an email so we can get back to you!
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    onChange={this.onChange}
                    placeholder="james@mail.mcgill.ca"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    className="form-control"
                    id="messageInput"
                    rows="4"
                    name="message"
                    onChange={this.onChange}
                    placeholder="We would love to hear some feedback!"
                  ></textarea>
                </div>

                {error && <p className="alert-danger">{error.message}</p>}

                <div className="col-12 text-center">
                  <button
                    id="formSubmitBtn"
                    className="btn btn-success"
                    disabled={isInvalid}
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
