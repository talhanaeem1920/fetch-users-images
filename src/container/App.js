import React from "react";
import "../stylesheets/App.scss";
import Home from "../container/Home";
import SearchImages from "../container/SearchImages";
import SearchUsers from "../container/SearchUsers";
import User from "../components/Users/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/searchusers">
            <SearchUsers />
          </Route>

          <Route path="/searchimages">
            <SearchImages />
          </Route>
          <Route path="/user/:username">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
