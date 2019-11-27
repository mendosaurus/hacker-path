import React, { Component } from "react";
import Rating from "./Rating";
import Button from "./Button";
import axios from "axios";

export default class RandomQuote extends Component {
  refreshPage = () => {
    window.location.reload(false);
  };
  handleSaveQuote = e => {
    console.log("save!");
    e.preventDefault();
    this.setState({
      imageUrl: `${this.props.quote.author}`,
      quote: `${this.props.quote.en}`,
      author: `${this.props.quote.author}`,
      rating: `${this.props.quote.rating}`
    });
    const quoteData = this.state;
    axios
      // .post("https://ironrest.herokuapp.com/createCollection/quotes") // create a collection
      .post("https://ironrest.herokuapp.com/quotes", quoteData) // Insert new document in collection
      .then(e => console.log(e));
  };
  render() {
    console.log(this.props.quote);
    return (
      <blockquote className="blockquote text-light">
        <div className="row">
          <div className="col-sm-12 text-center p-5">
            <button value="Refresh Page" onClick={this.refreshPage}>
              Gimme More
            </button>
            {/* <Thumbnail author={this.props.quote.author} /> */}
          </div>
          <div className="col-sm-12 p-2">
            <p className="p-3">{this.props.quote.en}</p>
            <footer className="blockquote-footer">
              {this.props.quote.author}
            </footer>
            <Rating>{this.props.quote.rating}</Rating>
            <Button submit={e => this.handleSaveQuote(e)} info="Save" />
            {/* <span>voted by {this.state.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
