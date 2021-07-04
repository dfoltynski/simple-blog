import React from "react";
import "./App.css";
import { Button, ArticlesList } from "./components/";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ArticlesList} />
      </Switch>
    </div>
  );
}

export default App;
