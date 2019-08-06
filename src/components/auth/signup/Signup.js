import React, { Component } from 'react';
import './Signup.css';

import { Button } from '@blueprintjs/core';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div class="container">
        <div class="signup-form ">
          <h1> Sign Up</h1>
          <div class="bp3-input-group .modifier">
            <input
              type="username"
              class="bp3-input"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-person" />
          </div>
          <div class="bp3-input-group .modifier">
            <input
              type="email"
              class="bp3-input"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-envelope" />
          </div>
          <div class="bp3-input-group .modifier">
            <input
              type="password"
              class="bp3-input"
              placeholder="Password"
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
        </div>
      </div>
    );
  }
}

export default Signup;
