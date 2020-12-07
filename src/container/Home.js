import Button from "../components/commonComponents/Button";
import "../stylesheets/Home.scss";
import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <Button text="Search Users" to="/searchusers" />
      <Button text="Search Images" to="/searchimages" />
    </div>
  );
};

export default Home;
