// Header component
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { headerStyle, imgStyle } from "./constant/styleConstant";
import logo from "../survey.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends Component {
  // helper method, show state in header

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <button className="btn flow-text">
            <a href="/auth/google">Login With Google</a>
          </button>
        );
      // logged in user model,payment
      // return an array of elements
      default:
        // billing,provide a key, unique,static key
        return [
          <li key="1">
            <Payments />
          </li>,
          // topbottom 0 rightleft 10px
          <li key="3" style={{ margin: "0 15px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <button key="2" className="btn flow-text pink darken-4">
            <a href="/api/logout">Log out</a>
          </button>,
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <Navbar
        bg="light"
        expand="md"
        style={headerStyle}
        className="z-depth-0 black-text"
      >
        <Navbar.Brand>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            style={{ color: "black", fontSize: "1.8rem" }}
          >
            <img
              src={logo}
              alt="logo"
              className="d-inline-block align-baseline"
              style={imgStyle}
            />
            Emaily
          </Link>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <ul id="nav-mobile" className="right black-text">
          {this.renderContent()}
        </ul>
      </Navbar>
    );
  }
}

// define map state outof redux store
// auth: state.auth
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
