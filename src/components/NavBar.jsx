import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleChangeState(state) {
    this.setState({ isOpen: state.isOpen });
  }
  closeMenu() {
    console.log("close menu!");
    console.log(this.state);
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Navbar
        onStateChange={state => this.handleStateChange(state)}
        isOpen={this.state.isOpen}
        closeMenu={this.closeMenu}
        expand="lg"
        className="background-dark"
        fixed="top"
      >
        <Navbar.Brand href="/hacker-path/">
          <strong className="font-orange">5 SECONDS OF KNOWLEDGE</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link
                to={"/quotes/"}
                className="nav-link text-light"
                onClick={() => this.closeMenu()}
              >
                Search Quotes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/saved-quotes/"}
                className="nav-link text-light"
                onClick={() => this.closeMenu()}
              >
                Saved Quotes
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
