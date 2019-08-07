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
    this.props.history.replace('/');
  };

  checkAuth() {
    if (this.state.loggedIn === true) {
      return (
        <div>
          <Link to={'/profile'}>
            <button class="bp3-button bp3-minimal">Profile</button>
          </Link>
          <span class="bp3-navbar-divider" />
          <Link to={'/'}>
            <button class="bp3-button bp3-minimal" onClick={this.handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/auth/login'}>
            <button class="bp3-button bp3-minimal">Log In</button>
          </Link>
          <span class="bp3-navbar-divider" />
          <Link to={'/auth/signup'}>
            <button class="bp3-button bp3-minimal">Sign Up</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav class="bp3-navbar bp3-dark">
        <div>
          <div class="bp3-navbar-group bp3-align-left">
            <div class="bp3-navbar-heading">
              <Link to={'/'}>
                <h1 class="bp3-font-size-large">NightLyfe</h1>
              </Link>
            </div>
          </div>
          <div class="bp3-navbar-group bp3-align-left">
            <Link to={'/'}>
              <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
            </Link>
            <Link to={'/events'}>
              <button class="bp3-button bp3-minimal bp3-icon-globe">
                Events
              </button>
            </Link>
            <Link to={'/about'}>
              <button class="bp3-button bp3-minimal bp3-icon-heart">
                About
              </button>
            </Link>
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            {/* <Link to={'/auth/login'}>
              <button class="bp3-button bp3-minimal">Log In</button>
            </Link>
            <span class="bp3-navbar-divider" />
            <Link to={'/auth/signup'}>
              <button class="bp3-button bp3-minimal">Sign Up</button>
            </Link> */}
            {this.checkAuth()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
