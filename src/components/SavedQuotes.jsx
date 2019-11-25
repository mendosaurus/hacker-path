import React, { Component } from "react";
import axios from "axios";
import SavedQuote from "./SavedQuote";
import Search from "./Search";

export default class SavedQuotes extends Component {
  constructor() {
    super();
    this.state = {
      savedQuotes: []
    };
  }
  componentDidMount() {
    axios.get("https://ironrest.herokuapp.com/quotes").then(response => {
      console.log(response);
      console.log(this.state);
      this.setState({
        savedQuotes: response.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        {/* <div className="container p-2">
          <Search searchInput={e => this.searchInput(e)} className="input" />
        </div> */}
        <div className="container">
          {this.state.savedQuotes.map((quote, i) => {
            return <SavedQuote quote={quote} key={i} />;
          })}
          .reverse()
        </div>
      </div>
    );
  }
}
