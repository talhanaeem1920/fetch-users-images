import { Link } from "react-router-dom";
import "../../stylesheets/UserCard.scss";
import ProfilePic from "./ProfilePic";
import UserCardInfo from "./UserCardInfo";
import React from "react";

const UserCard = ({ username, profileimage, location, name }) => {
  return (
    <Link to={`/user/${username}`} className="UserCard">
      <ProfilePic profileimage={profileimage} />
      <UserCardInfo name={name} location={location} />
    </Link>
  );
};

export default UserCard;
