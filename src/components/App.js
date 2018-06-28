import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions/";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  actions
)(
  class extends Component {
    renderButton = () => {
      if (this.props.auth) {
        return (
          <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        );
      }

      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    };

    renderHeader = () => (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );

    render() {
      return (
        <div>
          {this.renderHeader()}
          <Route path="/post" component={CommentBox} />
          <Route exact path="/" component={CommentList} />
        </div>
      );
    }
  }
);
