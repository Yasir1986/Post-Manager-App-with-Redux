import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Shortcut from "./Shortcut";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h2>Post Main Manager</h2>

        <Link to="/Post-Manager-App-with-Redux/New">
          <button className="btn-big">Add Post "Click Me!"</button>
        </Link>

        {this.props.posts.map((obj, index) => (
          <Shortcut postElement={obj} index={index} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Main);