import React from "react";
import "../../stylesheets/UserCardInfo.scss";
import HeadingBold from "../commonComponents/HeadingBold";
import Location from "../commonComponents/Location";

const UserCardInfo = (props) => {
  return (
    <div className="UserCardInfo">
      <HeadingBold value={props.name} />
      <Location location={props.location} />
    </div>
  );
};

export default UserCardInfo;
