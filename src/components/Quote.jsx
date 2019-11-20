import React, { Component } from "react";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";

export default class Quote extends Component {
  render() {
    return (
      <div className="container">
        <Thumbnail author={this.props.quote.author} />
        <blockquote className="blockquote text-light bg-dark">
          <p className="mb-0">{this.props.quote.en}</p>
          <footer className="blockquote-footer">
            {this.props.quote.author}
          </footer>
          <Rating>{this.props.quote.rating}</Rating>
          {/* <span>voted by {this.props.quote.numberOfVotes} people</span> */}
        </blockquote>
      </div>
    );
  }
}
