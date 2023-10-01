import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      displayMessage: "Initially : - ",
    };
  }
  increment(e) {
    this.setState({
      message: e.target.value,
    });
  }
  handlClick() {
    if (this.state.message) {
      this.setState({
        displayMessage: this.state.message,
        message: "",
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.displayMessage && <h1>{this.state.displayMessage}</h1>}

        <input
          type="text"
          value={this.state.message}
          onChange={(e) => this.increment(e)}
        ></input>
        <button
          onClick={() => this.handlClick()}
          //   disabled={!this.state.message}
        >
          Click
        </button>
      </div>
    );
  }
}
