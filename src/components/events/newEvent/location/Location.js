import React, { Component } from 'react';

import { FormGroup } from '@blueprintjs/core';

class Location extends Component {
  render() {
    return (
      <FormGroup className="bp3-input-group .modifier">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter Address"
          name="address"
          value={this.props.address || ''}
          onChange={this.props.handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter City"
          name="city"
          value={this.props.city || ''}
          onChange={this.props.handleChange}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter State"
          name="state"
          value={this.props.state || ''}
          onChange={this.props.handleChange}
        />
        <label htmlFor="areaCode">Area Code</label>
        <input
          type="text"
          className="bp3-input form-control"
          placeholder="Enter Area Code"
          name="areaCode"
          value={this.props.areaCode || ''}
          onChange={this.props.handleChange}
        />
      </FormGroup>
    );
  }
}

export default Location;
