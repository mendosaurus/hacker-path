import React, { Component } from "react";
import axios from "axios";

export default class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      imageUrl: {
        name: "url"
      }
    };
  }

  componentDidMount() {
    if (this.props.author) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${this.props.author
            .split(" ")
            .join("%20")}
          &format=json&prop=pageimages&pithumbsize=500` //cors error
        )
        .then(response => {
          console.log(this.state.imageUrl);
          this.setState({ authors: response.data.query });
          console.log(this.props.author, response.data.query);
          if (
            this.state.authors &&
            this.state.authors.pages &&
            Object.keys(this.state.authors.pages)[0] &&
            this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
              .thumbnail
          ) {
            // wanted to add new properties in imageUrl, but it overwrites previous property
            console.log(this.props.author);
            const setImage = {
              ...this.state.imageUrl,
              [this.props.author]: this.state.authors.pages[
                Object.keys(this.state.authors.pages)[0]
              ].thumbnail.source
            };
            this.setState({ imageUrl: setImage });
            console.log(this.state.imageUrl);
          }
        });
    }
  }

  render() {
    if (
      this.state.authors &&
      this.state.authors.pages &&
      Object.keys(this.state.authors.pages)[0] &&
      this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
        .thumbnail
    ) {
      const imgStyle = {
        height: "200px"
      };
      return (
        <img
          className="img-thumbnail"
          src={
            this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
              .thumbnail.source
          }
          style={imgStyle}
          alt=""
        />
      );
    } else {
      const imgStyle = {
        height: "200px"
      };
      return (
        <img
          src={require("../images/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg")}
          className="img-thumbnail"
          style={imgStyle}
          alt=""
        />
      );
    }
  }
}
