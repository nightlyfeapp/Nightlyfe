import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
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
            <Link to={'/auth/login'}>
              <button class="bp3-button bp3-minimal">Log In</button>
            </Link>
            <span class="bp3-navbar-divider" />
            <Link to={'/auth/signup'}>
              <button class="bp3-button bp3-minimal">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
