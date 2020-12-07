import "../../stylesheets/Paragraph.scss";
import React from "react";

const Paragraph = (props) => {
  return <p className="Paragraph">{props.value}</p>;
};

export default Paragraph;
