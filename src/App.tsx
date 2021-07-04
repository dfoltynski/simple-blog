import React from "react";
import "./App.css";
import { Button, ArticlesList, Navbar } from "./components/";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticlesList} />
      </Switch>
    </div>
  );
}

export default App;
