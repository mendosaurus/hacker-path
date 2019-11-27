import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quotes from "./components/Quotes";
import SavedQuotes from "./components/SavedQuotes";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/saved-quotes" component={SavedQuotes} />
      </Switch>
    </div>
  );
}

export default App;
