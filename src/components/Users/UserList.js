import UserCard from "./UserCard";
import "../../stylesheets/UserList.scss";
import React from "react";

const UserList = (props) => {
  return (
    <div className="UserList">
      {props.users.map((n, i) => (
        <UserCard
          key={i}
          username={n.username}
          name={n.name}
          location={n.location}
          profileimage={n.profile_image.large}
        />
      ))}
    </div>
  );
};

export default UserList;
