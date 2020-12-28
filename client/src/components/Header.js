// Header component
import React, { Component } from "react";
import { connect } from "react-redux";
// Link tags, app 内部的navigation,'react-router' inside the browsers
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { headerStyle, imgStyle } from "./constant/styleConstant";
import logo from "../survey.png";

const btnStyle = "btn flow-text";

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
      <nav className="z-depth-0 black-text" style={headerStyle}>
        <div class="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <div>
              <img src={logo} alt="logo" style={imgStyle} />
              <span className="black-text">Emaily</span>
            </div>
          </Link>

          <ul id="nav-mobile" className="right black-text">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
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
