import React from "react";
import "./App.css";
import { Button, ArticlesList, Navbar, Article } from "./components/";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticlesList} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default App;
