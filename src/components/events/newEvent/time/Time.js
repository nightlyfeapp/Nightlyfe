import React, { Component } from 'react';

import { FormGroup } from '@blueprintjs/core';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <FormGroup className="form-group">
        <label htmlFor="startDate">Date</label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/DD/YYYY"
        />
        {/* <label htmlFor="time">Time</label>
        <DatePicker
          selected={this.props.time}
          onChange={this.props.handleChange}
          name="time"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={5}
          dateFormat="h:mm aa"
          timeCaption="Time"
        /> */}
      </FormGroup>
    );
  }
}

export default Time;
