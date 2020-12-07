import "../../stylesheets/ProfilePic.scss";
import React from "react";

const ProfilePic = (props) => {
  return (
    <img
      className="ProfilePic"
      src={props.profileimage}
      alt="Profile picture"
    />
  );
};

export default ProfilePic;
