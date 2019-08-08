import React, { Component } from 'react';
import './NewEvent.css';

import axios from 'axios';
import { FormGroup } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core';

import Title from './title/Title';
import Description from './description/Description';
import Location from './location/Location';
import Time from './time/Time';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      title: '',
      description: '',
      startDate: '',
      time: '',
      address: '',
      city: '',
      stae: '',
      areaCode: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { title, description, location, time } = this.state;
    console.log(
      `Title: ${title},  Description: ${description}, Location: ${location}, Time: ${time}`
    );

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddressChange = address => {
    this.setState({ address });
  };

  submitForm = event => {
    event.preventDefault();

    const {
      title,
      description,
      time,
      address,
      city,
      state,
      areaCode
    } = this.state;

    const data = {
      title: { title },
      timeOfEvent: { time },
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
        <FormGroup onSubmit={this.submitForm}>
          <Title handleChange={this.handleChange} title={this.state.title} />
          <Description
            handleChange={this.handleChange}
            description={this.state.description}
          />
          {/* <Location
            handleChange={this.handleChange}
            location={this.state.location}
            address
          /> */}
          {/* <Time
            handleChange={this.state.handleChange}
            time={this.state.time}
            startDate={this.state.startDate}
          /> */}
          <Button
            rightIcon="arrow-right"
            intent="success"
            text="Create Event"
            value="submit"
            type="submit"
          />
        </FormGroup>
      </div>
    );
  }
}

export default NewEvent;
