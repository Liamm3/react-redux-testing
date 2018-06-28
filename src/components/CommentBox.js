import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/";

export default connect(
  null,
  actions
)(
  class extends Component {
    state = {
      comment: ""
    };

    handleInput = event => {
      this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.saveComment(this.state.comment);
      this.setState({ comment: "" });
    };

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={this.state.comment} onChange={this.handleInput} />
            <div>
              <button>Submit Comment</button>
            </div>
          </form>
          <button onClick={this.props.fetchComments}>Fetch Comments</button>
        </div>
      );
    }
  }
);
