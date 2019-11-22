import React, { Component } from "react";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";
import Button from "./Button";
import axios from "axios";

export default class Quote extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      quote: "",
      author: "",
      rating: ""
    };
  }
  
  handleSaveQuote = e => {
    console.log("save!");
    e.preventDefault();
    this.setState({
      //need to setState first
      imageUrl: "",
      quote: "",
      author: "",
      rating: ""
    });
    const quoteData = this.state;
    axios
      // create a collection
      .post("https://ironrest.herokuapp.com/createCollection/quotes")
      // Insert new document in collection
      .post("https://ironrest.herokuapp.com/quotes", quoteData)
      .then(e => console.log(e));
  };

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
            <Button submit={e => this.handleSaveQuote(e)} info="Save" />
            {/* <span>voted by {this.props.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
