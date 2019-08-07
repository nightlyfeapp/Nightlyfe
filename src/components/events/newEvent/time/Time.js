import React, { Component } from 'react';

import { FormGroup } from '@blueprintjs/core';
import { DatePicker } from 'date-fns';

class Time extends Component {
  constructor() {
    super();
    this.state = {
      startDate: ''
    };
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <FormGroup className="form-group">
        <label htmlFor="time">Select The Time of Your Event</label>
        <DatePicker
          className="form-control"
          selected={this.state.startDate}
          onChange={this.props.handleChange}
          showTimeSelect
          timeIntervals={5}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
          id="email"
          name="email"
          placeholder="Select A Date And Time"
          value={this.props.time}
        />
      </FormGroup>
    );
  }
}

export default Time;
