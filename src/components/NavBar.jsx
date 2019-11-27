import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends Component {
  state = {
    getInitialState() {
      return {
        navExpanded: false
      };
    },
    setNavExpanded: function(expanded) {
      this.setState({ navExpanded: expanded });
    },
    closeNav: function() {
      this.setState({ navExpanded: false });
    }
  };

  render() {
    return (
      <Navbar
        expand="lg"
        className="background-dark"
        fixed="top"
        inverse="true"
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        >
        <Navbar.Brand href="/hacker-path/">
          <strong className="font-orange">5 SECONDS OF KNOWLEDGE</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" onSelect={this.closeNav}>
            <li className="nav-item">
              <Link to={"/quotes/"} className="nav-link text-light">
                Search Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/saved-quotes/"} className="nav-link text-light">
                Saved Quotes
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
