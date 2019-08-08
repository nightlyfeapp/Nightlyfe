import React, { Component } from 'react';

import FormGroup from '@blueprintjs/core';

class Description extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <FormGroup className="bp3-input-group .modifier">
        <label htmlFor="title">Event Description</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter A Description"
          name="description"
          value={this.props.title}
          onChange={this.props.handleChange}
        />
        {/* <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock" /> */}
      </FormGroup>
    );
  }
}

export default Description;
