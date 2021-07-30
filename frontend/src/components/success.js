import React, { Component } from "react";

export default class Success extends Component {
  render() {
    return (
      <div className="bg-gray-500 py-32 px-10 min-h-screen text-xl">
        <div className="w-full max-w-md m-auto bg-gray-200 rounded-lg py-10 px-16">
          <span className="flex">
            Thank You! Your subscription has been confirmed.
          </span>
          <button
            className="flex pt-6 border-gray-500"
            onClick={this.props.handler}
          >
            &#x25c2; Go back
          </button>
        </div>
      </div>
    );
  }
}
