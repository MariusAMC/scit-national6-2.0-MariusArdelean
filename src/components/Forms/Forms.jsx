import { Component } from "react";
import { Button } from "./Button/Button";
import { Field } from "./Field/Field";
import { Message } from "./Message/Message";
import { MessageBox } from "./MessageBox/MessageBox";

import "./Forms.css";

export class Forms extends Component {
  state = {
    isValid: {
      fNameVal: true,
      lNameVal: true,
      emailVal: true,
      msgVal: true,
    },
    fNameVal: "",
    lNameVal: "",
    emailVal: "",
    msgVal: "",
    noDisplay: true,
  };

  handleInputChange = (event, key) => {
    const { isValid } = this.state;
    isValid[key] = true;
    this.setState({ [key]: event.target.value, isValid });
  };

  setInvalidInputKey = () => {
    const { isValid } = this.state;

    if (this.state.fNameVal === "") {
      isValid.fNameVal = false;
    }
    if (this.state.lNameVal === "") {
      isValid.lNameVal = false;
    }
    if (this.state.emailVal === "") {
      isValid.emailVal = false;
    }
    if (this.state.msgVal === "") {
      isValid.msgVal = false;
    }
    if (
      isValid.fNameVal === true &&
      isValid.lNameVal === true &&
      isValid.emailVal === true &&
      isValid.msgVal === true
    ) {
      this.setState({ isValid, noDisplay: false });
    } else {
      this.setState({ isValid });
    }
  };

  closeMsgBox = () => {
    this.setState({ noDisplay: true });
  };
  render() {
    const { isValid } = this.state;
    const inputStyle = { border: "3px solid red" };
    const sentMsgBoxStyle = { display: "flex" };

    return (
      <div className="form">
        <Field
          label="First Name"
          value={this.state.fNameVal}
          onChange={(event) => this.handleInputChange(event, "fNameVal")}
          style={inputStyle}
          isValid={isValid.fNameVal}
        />
        <Field
          label="Last Name"
          value={this.state.lNameVal}
          onChange={(event) => this.handleInputChange(event, "lNameVal")}
          style={inputStyle}
          isValid={isValid.lNameVal}
        />
        <Field
          label="Email"
          value={this.state.emailVal}
          onChange={(event) => this.handleInputChange(event, "emailVal")}
          style={inputStyle}
          isValid={isValid.emailVal}
        />
        <Message
          label="Message"
          value={this.state.msgVal}
          onChange={(event) => this.handleInputChange(event, "msgVal")}
          style={inputStyle}
          isValid={isValid.msgVal}
        />
        <Button onClick={this.setInvalidInputKey} />
        <MessageBox
          noDisplay={this.state.noDisplay}
          style={sentMsgBoxStyle}
          onClick={this.closeMsgBox}
        />
      </div>
    );
  }
}
