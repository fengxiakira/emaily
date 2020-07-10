// Header component
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Link tags, app 内部的navigation,'react-router' inside the browsers
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
    // helper method, show state in header

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            // logged in user model,payment 
            // return an array of elements
            default:
                // billing,provide a key, unique,static key
                return [
                    <li key="1"><Payments /></li>,
                    // topbottom 0 rightleft 10px
                    <li key="3" style={{ margin: "0 15px" }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Log out</a></li>,

                ]

        }
    }


    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right ">
                        {this.renderContent()}

                    </ul>


                </div>
            </nav>

        )
    }

}

// define map state outof redux store
// auth: state.auth
function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);