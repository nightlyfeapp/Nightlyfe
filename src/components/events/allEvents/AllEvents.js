import React, { Component } from 'react';
import './AllEvents.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    await axios
      .get('https://nightlyfe-server.herokuapp.com/events')
      .then(res => {
        const events = res.data.events;
        console.log(events);
        this.setState({ events });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="bp3-heading">Events</h1>
        <div className="events">
          <div className="card-container">
            {this.state.events.map((events, index) => {
              return (
                <div key={events._id} className="bp3-card bp3-elevation-3">
                  <Link to={'/events/:eventId'}>
                    <h1>{events.title}</h1>
                  </Link>
                  <h3>{events.location}</h3>
                  <h3>{events.description}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AllEvents;
