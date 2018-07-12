import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_POST } from "../Actions"

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const { title, category, post, isTouched } = this.state;
    const errors = this.validate(title, category, post);
    return (
      <div className="post-add-new">
        <h2 className="addnewpost">Adding New Post</h2>

        <p>
          <label htmlFor="title" className="title-input">Title:</label>
          <input
            id="title"
            className={errors.title && isTouched.title ? "invalid" : ""}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            value={title}
          />
          <span className="err-msg">{errors.title}</span>
        </p>

      <div className="category-input">
        <p>
          <label htmlFor="category" >Category:</label>
            <input
              id="category"
              className={errors.category && isTouched.category ? "invalid" : ""}
              onChange={this.handleChange}
              onBlur={this.handleFocus}
              value={category}
          />
          <span className="err-msg">{errors.category}</span>
          </p>
        </div>

        
        <p><label htmlFor="post" className="post-input">Write New Post:</label></p>

         <div className = "Form">
          <textarea className="area"
            rows="20"
            cols="100"
            id="post"
            className={errors.post && isTouched.post ? "invalid" : ""}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            value={post}
          />
          <span className="err-msg">{errors.post}</span>
      
         </div>

        <br />

        <span>
          <Link to="/Post-Manager-App-with-Redux/">
            <button
              className="btn-big"
              disabled={this.isSubmitDisabled(errors)}
              onClick={() => this.props.addPost(title, category, post)}
            >
              Save
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
    addPost: (title, category, post) =>
      dispatch(ADD_POST(title, category, post))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);