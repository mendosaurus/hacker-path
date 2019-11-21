import React, { Component } from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Rating from "./Rating";
// axios
//   .get("https://programming-quotes-api.herokuapp.com/quotes/random")
//   .then(result => console.log(result));
export default class randomQuote extends Component {
  state = {
    quote: {}
  };
  componentDidMount() {
    // console.log(this.props);

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://programming-quotes-api.herokuapp.com/quotes/random"
      )
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
            <Thumbnail author={this.props.quote.author} />
          </div>
          <div className="col-sm-9">
            <p className="">{this.props.quote.en}</p>
            <footer className="blockquote-footer">
              {this.props.quote.author}
            </footer>
            <Rating>{this.props.quote.rating}</Rating>
            {/* <span>voted by {this.props.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
