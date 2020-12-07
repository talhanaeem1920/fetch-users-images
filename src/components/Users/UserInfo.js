import "../../stylesheets/UserInfo.scss";
import ProfilePic from "./ProfilePic";
import Location from "../commonComponents/Location";
import HeadingBold from "../commonComponents/HeadingBold";
import Paragraph from "../commonComponents/Paragraph";
import React from "react";

const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      <ProfilePic profileimage={props.user.profile_image.large} />
      <div className="UserInfo-content">
        <HeadingBold value={props.user.name} />
        <Location location={props.user.location} />
        <Paragraph value={props.user.bio} />
      </div>
    </div>
  );
};

export default UserInfo;
