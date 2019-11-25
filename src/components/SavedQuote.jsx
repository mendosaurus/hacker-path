import React, { Component } from "react";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";
import Button from "./Button";
import axios from "axios";

export default class SavedQuote extends Component {
  render() {
    return (
      <blockquote className="blockquote text-light bg-dark p-3">
        <div className="row">
          <div className="col-sm-3 text-center">
            <Thumbnail author={this.props.quote.author} />
          </div>
          <div className="col-sm-9">
            <p className="p-3">{this.props.quote.quote}</p>
            <footer className="blockquote-footer">
              {this.props.quote.author}
            </footer>
            <Rating>{this.props.quote.rating}</Rating>
            <Button submit={e => this.handleSaveQuote(e)} info="Remove from" />
            {/* <span>voted by {this.props.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
