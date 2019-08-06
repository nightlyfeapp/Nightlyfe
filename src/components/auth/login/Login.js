import React, { Component } from 'react';
import './Login.css';

import { Button } from '@blueprintjs/core';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="login-form ">
          <h1> Log In</h1>
          <div class="bp3-input-group .modifier">
            <input type="username" class="bp3-input" placeholder="Username" />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-person" />
          </div>
          <div class="bp3-input-group .modifier">
            <input type="password" class="bp3-input" placeholder="Password" />
            <button class="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" />
          </div>
          <Button rightIcon="arrow-right" intent="success" text="Log In" />
        </div>
      </div>
    );
  }
}

export default Login;
