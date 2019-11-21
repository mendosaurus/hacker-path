import React, { Component } from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Rating from "./Rating";
import RandomQuote from "./RandomQuote";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      randomQuote: []
    };
  }

  componentDidMount() {
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(response => {
        this.setState({ randomQuote: response.data });
      });
  }

  render() {
    return (
      <div>
        <RandomQuote quote={this.state.randomQuote} />
      </div>
    );
  }
}
