import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleInput = async (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button Pressed");
    const item = { email: this.state.email };
    axios
      .post("/api/subscriptions/", item)
      .then((res) => this.handleSuccess())
      .catch((err) => {});
  };

  handleSuccess = () => {
    this.setState({ email: "" });
    this.props.handler();
  };

  render() {
    return (
      <div className="bg-gray-500 py-32 px-10 min-h-screen text-xl">
        <form
          className="md:w-1/2 mx-auto"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <span className="flex items-center py-5 font-bold">
            Sign up for our newsletter.
          </span>

          <div className="flex items-center bg-gray-400 rounded-lg mb-10">
            <label className="w-20 text-gray-100 text-right mr-8 font-bold">
              Email
            </label>
            <input
              className="flex-1 p-4 pl-0 bg-transparent placeholder-gray-500 outline-none text-white"
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your email"
              required={true}
              pattern="^\S+@\S+$"
              onChange={this.handleInput}
            ></input>
          </div>

          <button className="block w-full rounded bg-gray-400 py-3 text-white font-bold shadow">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}
