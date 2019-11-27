import React, { Component } from "react";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";
import Button from "./Button";
import axios from "axios";

export default class SavedQuote extends Component {
  handleRemoveQuote = e => {
    console.log("remove!");
    e.preventDefault();
    axios
      .delete(`https://ironrest.herokuapp.com/quotes/${this.props.quote._id}`) // delete document in collection
      .then(this.props.delete()); // call function in props
  };

  render() {
    return (
      <blockquote className="blockquote text-light bg-dark p-3 rounded">
        <div className="row">
          <div className="col-sm-3 text-center">
            <Thumbnail
              author={this.props.quote.author}
              image={this.props.image}
            />
          </div>
          <div className="col-sm-9">
            <p className="p-3">{this.props.quote.quote}</p>
            <footer className="blockquote-footer">
              {this.props.quote.author}
            </footer>
            <Rating>{this.props.quote.rating}</Rating>
            <Button submit={e => this.handleRemoveQuote(e)} info="Remove" />
            {/* <span>voted by {this.props.quote.numberOfVotes} people</span> */}
          </div>
        </div>
      </blockquote>
    );
  }
}
