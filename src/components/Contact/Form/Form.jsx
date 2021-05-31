import { Component } from "react";
import { FormField } from "../FormField/FormField";
import FormMessage from "../FormMessage/FormMessage";
import { SendButton } from "../SendButton/SendButton";
// import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";

import "./Form.scss";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    showMessage: false,
    checkValues: false,
  };

  setFieldValue = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  handleOnSend = () => {
    this.setState({ checkValues: true });

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.message
    ) {
      this.setState({ showMessage: true });
    }
  };

  handleCloseMessage = () => {
    this.setState({ showMessage: false });
  };

  isFieldInvalid = (value) => {
    if (this.state.checkValues && !value) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <form
        className="form"
        // onSubmit={sendEmail}
      >
        <div className="contact-inputs">
          <Fade right>
            <FormField
              type="text"
              name="name"
              label="Name"
              isInvalid={this.isFieldInvalid(this.state.firstName)}
              onChange={(value) => this.setFieldValue("firstName", value)}
            />

            <FormField
              type="email"
              name="email"
              label="Email"
              isInvalid={this.isFieldInvalid(this.state.email)}
              onChange={(value) => this.setFieldValue("email", value)}
            />
          </Fade>
        </div>
        <div className="text">
          <Fade right>
            <FormField
              name="message"
              label="Message"
              isTextarea
              isInvalid={this.isFieldInvalid(this.state.message)}
              onChange={(value) => this.setFieldValue("message", value)}
            />
          </Fade>
          <Fade up>
            <SendButton type="submit" value="Send" />
          </Fade>
          {this.state.showMessage ? (
            <FormMessage onClose={this.handleCloseMessage} />
          ) : null}
        </div>
      </form>
    );
  }
}
