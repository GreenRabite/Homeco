import React, { Component } from 'react';
import { connect } from 'redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        retrun (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return <li><a>Logout</a></li>
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
          Homeco
          </a>
          <ul className="right">
            <li>
              <a> Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect()(Header);
