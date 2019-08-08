import React, { Component } from 'react';
import './NewEvent.css';

import axios from 'axios';
import { Button } from '@blueprintjs/core';

import Title from './title/Title';
import Description from './description/Description';
import Location from './location/Location';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      startDate: '',
      startTime: '',
      location: {
        address: '',
        city: '',
        state: '',
        areaCode: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDatechange = date => {
    const { startDate } = this.state;
    console.log(startDate);
    this.setState({
      startDate: date
    });
  };

  handleTimeChange = time => {
    const { startTime } = this.state;
    console.log(startTime);
    this.setState({
      startTime: time
    });
  };

  submitForm = event => {
    event.preventDefault();

    const {
      title,
      description,
      startDate,
      startTime,
      address,
      city,
      state,
      areaCode
    } = this.state;

    const data = {
      title: { title },
      eventDate: { startDate },
      eventTime: { startTime },
      location: {
        address: { address },
        city: { city },
        state: { state },
        areaCode: { areaCode }
      },
      description: { description }
    };

    axios
      .post('https://nightlyfe-server.herokuapp.com/events/new', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <Title handleChange={this.handleChange} title={this.state.title} />
          <Description
            handleChange={this.handleChange}
            description={this.state.description}
          />
          <Location
            handleChange={this.handleChange}
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            areaCode={this.state.areaCode}
          />
          <label htmlFor="date">Date</label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDatechange}
            name="date"
            dateFormat="MMMM d, yyyy"
          />
          <label htmlFor="time">Time</label>
          <DatePicker
            selected={this.state.startTime}
            onChange={this.handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            dateFormat="h:mm aa"
            timeCaption="Time"
          />
          <Button
            rightIcon="arrow-right"
            intent="success"
            text="Create Event"
            value="submit"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default NewEvent;
