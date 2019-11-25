import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quotes from "./components/Quotes";
import RandomQuote from "./components/RandomQuote";
import SavedQuotes from "./components/SavedQuotes";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import NewEvent from "./components/NewEvent";
// import axios from "axios";
// import News from "./components/News";
// import StudyGroup from "./components/StudyGroup";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/daily-quote" component={RandomQuote} />
        <Route exact path="/saved-quotes" component={SavedQuotes} />
        {/* <Route exact path="/news" component={News} /> */}
        {/* <Route exact path="/make-study-group" component={NewEvent} /> */}
      </Switch>
    </div>
  );
}

export default App;
