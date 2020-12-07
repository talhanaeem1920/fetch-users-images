import React from "react";
import "../../stylesheets/Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link className="Button" to={props.to}>
      {props.text}
    </Link>
  );
};

export default Button;
