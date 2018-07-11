import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_POST } from "../Actions"

const Details = props => {
  const postID = props.match.params.postID;
  const tabIndex = props.posts.findIndex(element => {
    return element.id == postID;
  });
  const myPost = props.posts[tabIndex];
  const title = myPost.title;
  const category = myPost.category;
  const post = myPost.post;

  return (
    <div className="post-details">

      <h2>Post Details</h2>

      <div className="btn-div">

      <Link to="/">
        <button
          className="btn-big"
          onClick={() => {
            props.deletePost(postID);
          }}
        >
          Delete Post
        </button>
      </Link>

      <Link to={`/Edit/${postID}`}>
        <button className="btn-big">Edit Post</button>
      </Link>

      <Link to="/">
        <button className="btn-big">Back to Posts</button>
      </Link>

      </div>

      <div className="post-details-div">    
        <p className="post-details-title">Title:{title}</p>
        <p className="post-details-catgory">Category:{category}</p>
        <br />
        <p>{post}</p>
      </div>

    </div>
  );
};
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postID => dispatch(DELETE_POST(postID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);