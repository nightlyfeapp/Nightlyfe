import React, { Component } from 'react';

import { FormGroup } from '@blueprintjs/core';

class Title extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <FormGroup className="bp3-input-group .modifier">
        <label htmlFor="title">What's Your Event Called?</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter Title"
          name="title"
          value={this.props.title}
          onChange={this.props.handleChange}
        />
        {/* <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" /> */}
      </FormGroup>
    );
  }
}

export default Title;
