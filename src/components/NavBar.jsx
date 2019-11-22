import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar } from "react-bootstrap";
// import { Brand } from "react-bootstrap";
// import { Toggle } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import { Link } from "react-bootstrap";
// import { Collapse } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="background-dark">
        <Navbar.Brand href="/">
          <strong className="font-orange">5 SECONDS OF KNOWLEDGE</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            {/* <Nav.Link href="#quotes">Search Quotes</Nav.Link>
            <Nav.Link href="#saved-quotes">Saved Quotes</Nav.Link> */}
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
      // {/* <nav className="navbar navbar-expand-lg">
      //   <Link className="navbar-brand font-orange" to="/">
      //     <img
      //       src="../images/logo.png"
      //       width="30"
      //       height="30"
      //       className="d-inline-block align-top"
      //       alt=""
      //     />
      //     <strong>5 SECONDS OF KNOWLEDGE</strong>
      //   </Link>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //     aria-controls="navbarNav"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav">
      //       {/* <li className="nav-item">
      //         <Link to={"/"} className="nav-link text-light">
      //           Home
      //           <span className="sr-only">(current)</span>
      //         </Link>
      //       </li> */}
      //       <li className="nav-item">
      //         <Link to={"/quotes"} className="nav-link text-light">
      //           Search Quotes
      //         </Link>
      //       </li>
      //       {/* <li className="nav-item">
      //         <Link to={"/daily-quote"} className="nav-link text-light">
      //           Daily Quote
      //         </Link>
      //       </li> */}
      //       {/* <li className="nav-item">
      //         <Link to={"/make-study-group"} className="nav-link text-light">
      //           Make Study Group
      //         </Link>
      //       </li> */}
      //       <li className="nav-item">
      //         <Link to={"/saved-quotes"} className="nav-link text-light">
      //           Saved Quotes
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav> */}
    );
  }
}
