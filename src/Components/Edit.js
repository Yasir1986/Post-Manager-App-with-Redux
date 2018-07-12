import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { EDIT_POST } from "../Actions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      category: "",
      post: "",
      isTouched: {
        title: false,
        category: false,
        post: false
      }
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  handleFocus = e => {
    const field = e.target.id;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true
      }
    }));
  };

  validate = (title, category, post) => {
    const errors = {
      title: /^[a-zA-Z\s]*$/.test(title)
        ? ""
        : "you can have only alphabetic characters",
      category: /^[a-zA-Z\s]*$/.test(category)
        ? ""
        : "you can have only alphabetic characters",
      post: /^[a-zA-Z\s0-9]*$/.test(post)
        ? ""
        : "you can have only alphabetic characters"
    };

    return errors;
  };

  componentDidMount() {
    const postID = this.props.match.params.postID;
    const myposts = this.props.posts;
    console.log("myposts:", postID);
    const tabIndex = myposts.findIndex(element => {
      return element.id == postID;
    });
    const myPost = this.props.posts[tabIndex];
    this.setState({
      id: myPost.id,
      title: myPost.title,
      category: myPost.category,
      post: myPost.post
    });
  }

  render() {
    const { id, title, category, post, isTouched } = this.state;
    const errors = this.validate(title, category, post);
    return (
      <div className="post-edit">
        <h2>Edit Post</h2>

        <p>
          <label htmlFor="title">Title:</label>
          <input className="edit-input"
            id="title"
             className={errors.title && isTouched.title ? "invalid" : ""}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            value={title}
          />
       <span className="err-msg">{errors.title}</span>
        </p>

        <br />

        <p>
          <label htmlFor="category"> Category: </label>
          <input
            id="category"
            className={errors.category && isTouched.category ? "invalid" : ""}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            value={category}
          />
          <span className="err-msg">{errors.category}</span>
        </p>

        <br />

        <p>
          <p><label htmlFor="post">Edit Your Post:</label></p>
          <textarea
            rows="4"
            cols="50"
            id="post"
            className={errors.post && isTouched.post ? "invalid" : ""}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            value={post}
          />
          <span className="err-msg">{errors.post}</span>
        </p>

        <br />

        <span>
          <Link to="/Post-Manager-App-with-Redux/">
            <button
              className="btn-big"
              disabled={this.isSubmitDisabled(errors)}
              onClick={() => this.props.editPost(id, title, category, post)}
            >
              SAVE
            </button>
          </Link>

          <Link to="/Post-Manager-App-with-Redux/">
            <button className="btn-big">Cancel</button>
          </Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPost: (id, title, category, post) =>
      dispatch(EDIT_POST(id, title, category, post))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);