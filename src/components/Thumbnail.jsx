import React, { Component } from "react";
import axios from "axios";
axios
  .get(
    "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=Edsger%20W.%20Dijkstra|Elon%20Musk&format=json&prop=pageimages&pithumbsize=500"
  )

  .then(result => console.log(result));
export default class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      authors: {},
      // authorString = ''
    };
  }




  componentDidMount() {
    let urlName = this.props.author.split(" ").join("%20");
    console.log(urlName);
    // console.log(
    //   urlName,
    //   `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${urlName}&prop=pageimagesformat=json`
    // );
    if (this.props.author)
      axios
        // .get(
        //   "https://en.wikipedia.org/w/api.php?action=query&titles=George%20Boole&prop=pageimages&format=json&pithumbsize=100"
        // )
        .get(
          `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${urlName}&format=json&prop=pageimages&pithumbsize=500` //cors error
        )
        .then(response => {
          // console.log(
          //   response.data.query.pages[Object.keys(response.data.query.pages)[0]]
          //   // response.data.query.pages
          // );
          this.setState({ authors: response.data.query });
        });
  }

    // makeUrl = () => {
    //   authorString
    // }
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
      // console.log(
      //   this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
      //     .thumbnail.source
      // );
      const imgStyle = {
        height: "200px"
      };
      return (
        <img
          className="img-circle"
          src={
            this.state.authors.pages[Object.keys(this.state.authors.pages)[0]]
              .thumbnail.source
          }
          style={imgStyle}
          alt=""
        />
      );
    } else {
      return "no pic";
    }
  }
}