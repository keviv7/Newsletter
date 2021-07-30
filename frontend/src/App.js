import React, { Component } from "react";
import Form from "./components/form";
import Success from "./components/success";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
    };
  }

  handler = () => {
    const value = !this.state.isSuccess;
    this.setState({ isSuccess: value });
  };

  //loading page required before deployment

  render() {
    if (this.state.isSuccess) return <Success handler={this.handler} />;
    else return <Form handler={this.handler} />;
  }
}
