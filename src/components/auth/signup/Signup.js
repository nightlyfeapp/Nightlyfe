import React, { Component } from 'react';
import './Signup.css';

import { Button } from '@blueprintjs/core';
import AuthService from '../../services/auth/AuthService';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      loading: false
    };
    this.Auth = new AuthService();
  }

  submitForm = event => {
    event.preventDefault();

    const { username, email, password } = this.state;

    this.Auth.signup(username, email, password).then(res => {
      if (this.Auth.loggedIn()) {
        window.location = '/user/profile';
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div classNameName="container">
        <form classNameName="signup-form " onSubmit={this.submitForm}>
          <h1> Sign Up</h1>
          <div classNameName="bp3-input-group .modifier">
            <input
              type="username"
              classNameName="bp3-input"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <button classNameName="bp3-button bp3-minimal bp3-intent-warning bp3-icon-person" />
          </div>
          <div classNameName="bp3-input-group .modifier">
            <input
              type="email"
              classNameName="bp3-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <button classNameName="bp3-button bp3-minimal bp3-intent-warning bp3-icon-envelope" />
          </div>
          <div classNameName="bp3-input-group .modifier">
            <input
              type="password"
              classNameName="bp3-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button classNameName="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" />
          </div>
          <Button
            rightIcon="arrow-right"
            intent="success"
            text="Sign Up"
            value="submit"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Signup;
