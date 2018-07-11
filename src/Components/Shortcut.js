import React from "react";
import { Link } from "react-router-dom";

const Shortcut = props => {
  return (

      <div className="full-shortcut">
    <div className="post-shortcut" key={props.index}>
     
      <Link to={`/Details/${props.postElement.id}`}>
       
        <span className="post-shortcut-category">
         {/* {props.postElement.title}, Title:
         {props.postElement.category}
         {props.postElement.post} */}
          <span className="shortcut-title">{props.postElement.title}</span>
          <span className="shortcut-category">{props.postElement.category}</span>
          {/* <span className="shortcut-post">Post:{props.postElement.post}</span><br /> */}
        </span>

      </Link>
    </div>
    </div>

  );
};
export default Shortcut