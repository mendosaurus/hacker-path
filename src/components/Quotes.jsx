import React, { Component } from "react";
import axios from "axios";
import Quote from "./Quote";

export default class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }
  
  componentDidMount() {
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes")
      .then(response => {
        this.setState({ quotes: response.data });
      });
  }

  render() {
    return (
      <div>
        {this.state.quotes.map((quote, i) => {
          return <Quote quote={quote} key={i} />;
        })}
      </div>
    );
  }
}
