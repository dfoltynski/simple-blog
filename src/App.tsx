import React from "react";
import "./App.css";
import {
  Button,
  ArticlesList,
  Navbar,
  Article,
  Favorites,
} from "./components/";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticlesList} />
        <Route exact path="/artykul/:id" component={Article} />
        <Route exact path="/ulubione/" component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
