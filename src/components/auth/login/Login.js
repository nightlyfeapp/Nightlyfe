import React, { Component } from 'react';
import './Login.css';

import { Button } from '@blueprintjs/core';
import AuthService from '../../services/auth/AuthService';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.Auth = new AuthService();
  }

  submitForm = event => {
    event.preventDefault();

    const { username, password } = this.state;

    this.Auth.login(username, password).then(res => {
      this.props.history.replace('/');
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div class="container">
        <form class="login-form" onSubmit={this.submitForm}>
          <h1> Log In</h1>
          <div class="bp3-input-group .modifier">
            <input
              type="username"
              class="bp3-input"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-person" />
          </div>
          <div class="bp3-input-group .modifier">
            <input
              type="password"
              class="bp3-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" />
          </div>
          <Button
            rightIcon="arrow-right"
            intent="success"
            text="Log In"
            value="submit"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Login;
