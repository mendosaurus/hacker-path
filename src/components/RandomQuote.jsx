import React, { Component } from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Rating from "./Rating";

export default class RandomQuote extends Component {
  render() {
    console.log(this.props.quote);
    return (
      <blockquote className="blockquote text-light">
        <div className="row">
          <div className="col-sm-12 text-center">
            <Thumbnail author={this.props.quote.author} />
          </div>
          <div className="col-sm-12">
            <p className="">{this.props.quote.en}</p>
            <footer className="blockquote-footer">
              {this.props.quote.author}
            </footer>
            <Rating>{this.props.quote.rating}</Rating>
            {/* <span>voted by {this.state.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
