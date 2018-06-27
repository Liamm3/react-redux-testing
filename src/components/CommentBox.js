import React, { Component } from "react";

export default class extends Component {
  state = {
    comment: ""
  };

  handleInput = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleInput} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
