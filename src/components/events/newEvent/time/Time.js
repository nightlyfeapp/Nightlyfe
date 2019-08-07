import React, { Component } from 'react';

import { Button, FormGroup } from '@blueprintjs/core';
import { DatePicker } from 'date-fns';

class Time extends Component {
  constructor() {
    super();
    this.state = {
      startDate: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <FormGroup>
        <label htmlFor="time">Select The Time of Your Event</label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeIntervals={5}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
        />
        <Button
          rightIcon="arrow-right"
          intent="success"
          text="Sign Up"
          value="submit"
          type="submit"
        />
      </FormGroup>
    );
  }
}

export default Time;
