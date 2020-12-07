import React, { useState } from "react";
import "../stylesheets/SearchUsers.scss";
import Input from "../components/commonComponents/Input";
import UserList from "../components/Users/UserList";

function SearchUsers(props) {
  const [users, setUsers] = useState([]);
  const baseUrl = "https://api.unsplash.com/search/users?page=1&query=";

  const fetchUsers = (url, query) => {
    fetch(`${url}${query}`, {
      headers: {
        Authorization:
          "Client-ID 26c032ac2708bcab4ff754dac0fb5b5a5410fb9bcc5e7c9f895e387cb62d8dc2",
      },
    })
      .then((result) => result.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e, query) => {
    e.preventDefault();
    fetchUsers(baseUrl, query);
  };

  return (
    <div className="SearchUsers">
      <Input handleSubmit={handleSubmit} value="User Search" />
      <UserList users={users} />
    </div>
  );
}

export default SearchUsers;
