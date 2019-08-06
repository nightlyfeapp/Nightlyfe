import React, { Component } from 'react';
import './Signup.css';

import { Button } from '@blueprintjs/core';

class Signup extends Component {
  render() {
    return (
      <div class="container">
        <div class="signup-form ">
          <h1> Sign Up</h1>
          <div class="bp3-input-group .modifier">
            <input type="username" class="bp3-input" placeholder="Username" />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-person" />
          </div>
          <div class="bp3-input-group .modifier">
            <input type="email" class="bp3-input" placeholder="Email" />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-envelope" />
          </div>
          <div class="bp3-input-group .modifier">
            <input type="password" class="bp3-input" placeholder="Password" />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" />
          </div>
          <Button rightIcon="arrow-right" intent="success" text="Sign Up" />
        </div>
      </div>
    );
  }
}

export default Signup;
