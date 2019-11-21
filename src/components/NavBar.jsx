import React, { Component } from "react";
import { Link } from "react-router-dom";


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
                Programmer's Quote
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/daily-quote"} className="nav-link">
                Daily Quote
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
