import React, { Component } from "react";
import axios from "axios";

export default class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      authors: {},
      imageUrl: ""
    };
  }

  componentDidMount() {
    let urlName = this.props.author.split(" ").join("%20");
    console.log(
      urlName,
      `https://en.wikipedia.org/w/api.php?action=query&titles=${urlName}&prop=pageimagesformat=json`
    );
    if (this.props.author)
      axios
        // .get(
        //   "https://en.wikipedia.org/w/api.php?action=query&titles=George%20Boole&prop=pageimages&format=json&pithumbsize=100"
        // )
        .get(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${urlName}&format=json&prop=pageimages`
        )
        // https://www.mediawiki.org/w/api.php?action=query&prop=pageimages&titles=Albert%20Einstein&pithumbsize=100
        .then(response => {
          console.log(
            response.data.query.pages[Object.keys(response.data.query.pages)[0]]
            // response.data.query.pages
          );
          this.setState({ authors: response.data.query });
        });
  }
  //.query.pages.'175040'
  render() {
    // {
    //   console.log(this.state.authors);
    // }
    if (
      this.state.authors &&
      this.state.authors.pages &&
      // this.state.authors.pages[175040].thumbnail
      Object.keys(this.state.authors.pages)[0] &&
      this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
        .thumbnail
    ) {
      console.log(
        this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
          .thumbnail.source
      );
      return (
        <img
          src={
            this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
              .thumbnail.source
          }
          alt=""
        />
      );
    } else {
      return "no pic";
    }
  }
}
