import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
