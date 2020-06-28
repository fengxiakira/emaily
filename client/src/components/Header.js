// Header component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    // helper method, show state in header

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            // logged in user model
            default:
                // billing
                return <li><a>Log out</a></li>;

        }
    }


    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Emaily</a>
                    {/* hide-on-med-and-down */}
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