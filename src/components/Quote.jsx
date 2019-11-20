import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div className="container">
        <blockquote className="blockquote">
          <p className="mb-0">{this.props.quote.en}</p>
          <footer className="blockquote-footer">
            {this.props.quote.author}
          </footer>
          {this.props.quote.rating}
          <span>voted by {this.props.quote.numberOfVotes} people</span>
        </blockquote>
      </div>
    );
  }
}
