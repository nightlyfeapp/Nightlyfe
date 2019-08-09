import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import AuthService from '../services/auth/AuthService';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.Auth = new AuthService();
  }

  componentDidMount() {
    this.setState({ loggedIn: this.Auth.loggedIn() });
  }

  handleLogout = () => {
    this.Auth.logout();
    if (!this.Auth.loggedIn()) {
      window.location = '/';
    }
  };

  checkAuth() {
    if (this.state.loggedIn === true) {
      return (
        <div>
          {/* <Link to={'/events/new'}>
            <button className="bp3-button bp3-minimal bp3-icon-add">
              Create New Event
            </button>
          </Link> */}
          <Link to={'/user/profile'}>
            <button className="bp3-button bp3-minimal">Profile</button>
          </Link>
          <span className="bp3-navbar-divider" />
          <Link to={'/'}>
            <button
              className="bp3-button bp3-minimal"
              onClick={this.handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/auth/login'}>
            <button className="bp3-button bp3-minimal">Log In</button>
          </Link>
          <span className="bp3-navbar-divider" />
          <Link to={'/auth/signup'}>
            <button className="bp3-button bp3-minimal">Sign Up</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="bp3-navbar bp3-dark">
        <div>
          <div className="bp3-navbar-group bp3-align-left">
            <div className="bp3-navbar-heading">
              <Link to={'/'}>
                <h1 className="bp3-font-size-large">NightLyfe</h1>
              </Link>
            </div>
          </div>
          <div className="bp3-navbar-group bp3-align-left">
            <Link to={'/'}>
              <button className="bp3-button bp3-minimal bp3-icon-home">
                Home
              </button>
            </Link>
            <Link to={'/events'}>
              <button className="bp3-button bp3-minimal bp3-icon-globe">
                Events
              </button>
            </Link>
            <Link to={'/about'}>
              <button className="bp3-button bp3-minimal bp3-icon-heart">
                About
              </button>
            </Link>
          </div>
          <div className="bp3-navbar-group bp3-align-right">
            {this.checkAuth()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
