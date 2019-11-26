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

  render() {
    if (this.props.image && this.props.image.thumbnail) {
      const imgStyle = {
        height: "200px"
      };
      return (
        <img
          className="img-circle"
          src={this.props.image.thumbnail.source}
          style={imgStyle}
          alt=""
        />
      );
    } else {
      console.log(this);

      const imgStyle = {
        height: "200px"
      };
      // return "no pic";
      return (
        <img
          // src="../images/112815953-no-image-available-icon-flat-vector.jpg"
          src={require("../images/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg")}
          className="img-circle"
          style={imgStyle}
          alt=""
        />
      );
    }
  }
}
