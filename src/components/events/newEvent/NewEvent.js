import React, { Component } from 'react';
import './NewEvent.css';

import axios from 'axios';
import { FormGroup } from '@blueprintjs/core';

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
      location: '',
      time: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { title, description, location, time } = this.state;
    console.log(title, description, location, time);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();

    const { title, description, location, time } = this.state;

    axios
      .post(
        'https://nightlyfe-server.herokuapp.com/events/new',
        title,
        description,
        location,
        time
      )
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
          {/* <Description
            handleChange={this.state.handleChange}
            description={this.state.description}
          />
          <Location
            handleChange={this.state.handleChange}
            location={this.state.location}
          />
          <Time
            handleChange={this.state.handleChange}
            time={this.state.time}
            startDate={this.state.startDate}
          /> */}
        </FormGroup>
      </div>
    );
  }
}

export default NewEvent;
