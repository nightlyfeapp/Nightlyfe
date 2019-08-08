import React, { Component } from 'react';

import { FormGroup } from '@blueprintjs/core';

class Description extends Component {
  render() {
    return (
      <FormGroup className="bp3-input-group .modifier">
        <label htmlFor="title">Event Description</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter Description"
          name="description"
          value={this.props.title}
          onChange={this.props.handleChange}
        />
      </FormGroup>
    );
  }
}

export default Description;
