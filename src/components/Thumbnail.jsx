import React, { Component } from "react";
import axios from "axios";

export default class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      imageUrl: ""
    };
  }

  componentDidMount() {
    console.log(this.state, this.props.author);
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${this.props.author}&prop=pageimages&format=json&pithumbsize=300`
      )
      .then(response => {
        this.setState({ authors: response.data });
      });
  }

  render() {
    return <img src={this.state.imageUrl} alt="" />;
  }
}
