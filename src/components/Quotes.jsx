import React, { Component } from "react";
import axios from "axios";
import Quote from "./Quote";
import Search from "./Search";

export default class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      images: []
    };
  }

  componentDidMount() {
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes")
      .then(response => {
        let uniques = Object.values(
          response.data.reduce(
            (acc, cur) => Object.assign(acc, { [cur.author]: cur }),
            {}
          )
        );

        this.setState({ quotes: uniques });
        console.log(response.data);
        this.buildUrl(uniques);
      });
  }
  //https://en.wikipedia.org/w/api.php?action=query&titles=Edsger%20W.%20Dijkstra|Tony%20Hoare&format=json&prop=pageimages&pithumbsize=500
  buildUrl = data => {
    let url = "";
    for (let i = 0; i < 50; i++) {
      url += data[i].author + "|";
    }

    let finalUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${url.slice(
      0,
      -1
    )}&format=json&prop=pageimages&pithumbsize=500`;
    console.log(finalUrl);
    axios
      .get(finalUrl)
      .then(res => {
        console.log(res.data);
        let images = [];
        for (let j in res.data.query.pages) {
          images.push(res.data.query.pages[j]);
        }
        this.setState({ images });
      })
      .catch(err => console.log(err));
  };

  searchInput = e => {
    console.log(e.target.value);
    let search = e.target.value;
    let img = [];
    let filteredQuotes = this.state.quotes.filter((quote, i) => {
      if (quote.author.toLowerCase().includes(search.toLowerCase())) {
        img.push(this.state.images[i]);
        return quote;
      }
    });
    this.setState({
      quotes: filteredQuotes
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container p-2">
          <Search searchInput={e => this.searchInput(e)} className="input" />
        </div>
        <div className="container">
          {this.state.quotes.map((quote, i) => {
            console.log(this.state.images[i]);

            {
              return (
                <Quote quote={quote} key={i} image={this.state.images[i]} />
              );
            }
          })}
        </div>
      </div>
    );
  }
  getImages = () => {
    console.log("get image");
    this.state.images.map(author => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${author.title
            .split(" ")
            .join("%20")}
            &format=json&prop=pageimages&pithumbsize=500` //cors error
        )
        .then(response => console.log(response));
    });
  }
}
