import React, { Component } from "react";
import axios from "axios";
import Quote from "./Quote";
import Search from "./Search";

export default class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://programming-quotes-api.herokuapp.com/quotes"
      )
      .then(response => {
        this.setState({ quotes: response.data });
      });
  }

  searchInput = e => {
    console.log(e.target.value);
    let search = e.target.value;
    let filteredQuotes = this.state.quotes.filter(quote => {
      if (quote.author.toLowerCase().includes(search.toLowerCase())) {
        return quote;
      }
    });
    this.setState({
      quotes: filteredQuotes
    });
  };

  render() {
    return (
      <div>
        <Search searchInput={e => this.searchInput(e)} className="input" />
        {this.state.quotes.map((quote, i) => {
          return <Quote quote={quote} key={i} />;
        })}
      </div>
    );
  }
}
