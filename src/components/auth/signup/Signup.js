import React, { Component } from 'react';
import './Signup.css';

import { Button } from '@blueprintjs/core';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  submitForm = event => {
    event.preventDefault();

    const { username, email, password } = this.state;

    axios
      .post('https://nightlyfe-server.herokuapp.com/auth/signup', {
        username,
        email,
        password
      })
      .then(res => {
        this.props.history.replace('/');
        console.log(res);
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
      <div class="container">
        <form class="signup-form " onSubmit={this.submitForm}>
          <h1> Sign Up</h1>
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
              type="email"
              class="bp3-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-envelope" />
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
