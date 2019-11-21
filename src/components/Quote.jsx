import React, { Component } from "react";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";

export default class Quote extends Component {
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
