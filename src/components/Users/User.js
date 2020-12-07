import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../stylesheets/User.scss";
import UserInfo from "./UserInfo";
import ImageList from "../Images/ImageList";
import { baseUrl } from "../../variables/index";
import LoadingIcon from "../../images/loading.png";

const User = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  const fetchUser = (username) => {
    fetch(`${baseUrl}users/${username}`, {
      headers: {
        Authorization:
          "Client-ID 26c032ac2708bcab4ff754dac0fb5b5a5410fb9bcc5e7c9f895e387cb62d8dc2",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="unsplash_user">
      {user.photos ? (
        <>
          <UserInfo user={user} />
          <ImageList pics={user.photos} />
        </>
      ) : (
        <div className="loading-container">
          <img className="loading-icon" src={LoadingIcon} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default User;
