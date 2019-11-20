import React from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quotes from "./components/Quotes";
import News from "./components/News";
import StudyGroup from "./components/StudyGroup";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/news" component={News} />
        <Route exact path="/study-group" component={StudyGroup} />
      </Switch>
    </div>
  );
}

export default App;
