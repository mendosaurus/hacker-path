import React, { Component } from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Rating from "./Rating";

export default class randomQuote extends Component {
  state = {
    quote: {}
  };
  componentDidMount() {
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(response => {
        this.setState({
          quote: response.data
        });
      });
  }
  render() {
    return (
      <blockquote className="blockquote text-light bg-dark">
        <div className="row">
          <div className="col-sm-3 text-center">
            {/* <Thumbnail author={this.props.randomQuote.author} /> */}
          </div>
          <div className="col-sm-9">
            <p className="">{this.state.quote.en}</p>
            <footer className="blockquote-footer">
              {this.state.quote.author}
            </footer>
            <Rating>{this.state.quote.rating}</Rating>
            {/* <span>voted by {this.state.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
