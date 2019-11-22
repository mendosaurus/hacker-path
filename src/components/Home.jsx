import React, { Component } from "react";
import axios from "axios";
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
        console.log(response.data);
        this.setState({ randomQuote: response.data });
      });
    console.log(this.state);
  }

  render() {
    
      console.log(this.state.randomQuote);
    
    return <RandomQuote quote={this.state.randomQuote} />;
  }
}
