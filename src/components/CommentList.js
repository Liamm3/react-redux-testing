import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  comments: state.comments
});

class CommentList extends Component {
  renderComments = () =>
    this.props.comments.map(comment => <li key={comment}>{comment}</li>);

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CommentList);
