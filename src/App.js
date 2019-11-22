import React from "react";
import "./App.css";
// import axios from "axios";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quotes from "./components/Quotes";
import News from "./components/News";
// import StudyGroup from "./components/StudyGroup";
import RandomQuote from "./components/RandomQuote";
import NewEvent from "./components/NewEvent";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/daily-quote" component={RandomQuote} />
        <Route exact path="/news" component={News} />
        <Route exact path="/make-study-group" component={NewEvent} />
      </Switch>
    </div>
  );
}

export default App;
