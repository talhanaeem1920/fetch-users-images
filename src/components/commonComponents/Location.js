import "../../stylesheets/Location.scss";
import React from "react";
import pinIcon from "../../images/pin.png";
const Location = (props) => {
  return (
    <div className="Location">
      <img src={pinIcon} />
      <p>{props.location}</p>
    </div>
  );
};

export default Location;
