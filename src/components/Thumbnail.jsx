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
    let urlName = this.props.author.split(" ").join("%20");
    // console.log(this.state, this.props.author, urlName);
    axios
      .get(
        `https://www.mediawiki.org/w/api.php?action=query&prop=pageimages&titles=${urlName}&format=json&pithumbsize=300`
      )
      // https://www.mediawiki.org/w/api.php?action=query&prop=pageimages&titles=Albert%20Einstein&pithumbsize=100
      .then(response => {
        this.setState({ authors: response.data });
      });
  }

  render() {
    return <img src={this.state.imageUrl} alt="" />;
  }
}
