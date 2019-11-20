import React, { Component } from "react";
import { Link } from "react-router-dom";
// import snoowrap from "snoowrap";
// console.log("hello");
// function fetchSubreddit(pokemon)

// const r = new snoowrap({
//   userAgent: "Hacker's path",
//   clientId: "zs3PeU1uHNxf8A",
//   clientSecret: "p3saktzxIONoRekiu_388HwkiZH4",
//   username: "mendosaurus",
//   password: "masa1104",
//   accessToken: "373704983126-YOYIhKDfIjmAVnyJw5w5ttCxAKE"
// });

// console.log(r);
// window.r = r;
//client id = zs3PeU1uHNxf8A

//secret = 3saktzxIONoRekiu_388HwkiZH4

//refresh token 373704983126-C1Ampm8mIRM8xL01mqn1Cuw55dU
//access token 373704983126-YOYIhKDfIjmAVnyJw5w5ttCxAKE

// That's the entire setup process, now you can just make requests.

// Submitting a link to a subreddit
// r.getSubreddit("gifs").submitLink({
//   title: "Mt. Cameramanjaro",
//   url: "https://i.imgur.com/n5iOc72.gifv"
// });

// r.getSubreddit("gifs").submitLink({
//   title: "Mt. Cameramanjaro",
//   url: "https://i.imgur.com/n5iOc72.gifv"
// });

// Printing a list of the titles on the front page
// r.getHot()
//   .map(post => post.title)
//   .then(res => console.log(res));

// // Extracting every comment on a thread
// r.getSubmission("4j8p6d")
//   .expandReplies({ limit: Infinity, depth: Infinity })
//   .then(console.log);

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src="../images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Hacker's Path
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/quotes"} className="nav-link">
                Daily Quote
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/news"} className="nav-link">
                Latest Hacker News
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/study-group"} className="nav-link">
                Make Study Group
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
