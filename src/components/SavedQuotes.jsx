import React, { Component } from "react";
import axios from "axios";
import SavedQuote from "./SavedQuote";
// import Search from "./Search";

export default class SavedQuotes extends Component {
  constructor() {
    super();
    this.state = {
      savedQuotes: []
    };
  }

  componentDidMount() {
    axios.get("https://ironrest.herokuapp.com/quotes").then(response => {
      console.log(this.state);
      console.log(response.data);
      this.setState({
        savedQuotes: response.data
      });
    });
  }

  deleteQuote = e => {
    let savedQuotesCopy = this.state.savedQuotes.filter(
      // filter array in this.state,
      quote => quote._id !== e
    );
    console.log(e);
    console.log(savedQuotesCopy);
    // then set state
    this.setState({
      savedQuotes: savedQuotesCopy
    });
  };

  render() {
    return (
      <div className="container">
        {/* <div className="container p-2">
          <Search searchInput={e => this.searchInput(e)} className="input" />
        </div> */}
        <div className="container">
          {this.state.savedQuotes.map((quote, i) => {
            return (
              <SavedQuote
                quote={quote}
                delete={() => this.deleteQuote(quote._id)} // pass anonymous function as props
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
