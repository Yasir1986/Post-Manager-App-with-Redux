import React from "react";
import { Link } from "react-router-dom";

const Shortcut = props => {
  return (

      <div className="full-shortcut">
    <div className="post-shortcut" key={props.index}>
     
      <Link to={`/Post-Manager-App-with-Redux/Details/${props.postElement.id}`}>
       
        <span className="post-shortcut-category">
          <span className="shortcut-title">{props.postElement.title}</span>
          <span className="shortcut-category">{props.postElement.category}</span>
        </span>

      </Link>
    </div>
    </div>

  );
};
export default Shortcut
