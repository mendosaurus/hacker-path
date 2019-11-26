import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="background-dark fixed-top">
        <Navbar.Brand href="/">
          <strong className="font-orange">5 SECONDS OF KNOWLEDGE</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link to={"/quotes"} className="nav-link text-light">
                Search Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/saved-quotes"} className="nav-link text-light">
                Saved Quotes
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
