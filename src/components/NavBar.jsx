import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "react-bootstrap";

export default class NavBar extends Component {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
  }

  render() {
    return (
      <Navbar expand="lg" className="background-dark" fixed="top">
        >
        <Navbar.Brand href="/hacker-path/">
          <strong className="font-orange">5 SECONDS OF KNOWLEDGE</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={this.toggleNavbar}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          isOpen={!this.state.collapsed}
        >
          <Nav className="mr-auto">
            <NavItem>
              <Link
                to={"/quotes/"}
                className="nav-link text-light"
                onClick={this.closeNavbar}
              >
                <span>Search Quotes</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to={"/saved-quotes/"}
                className="nav-link text-light"
                onClick={this.closeNavbar}
              >
                <span>Saved Quotes</span>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
