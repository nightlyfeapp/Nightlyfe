import React, { Component } from 'react';
import './Profile.css';

import avatar from '../../../assets/images/8c46965de03827dc2a05e4c77eb110db--batman-comics.jpg';
import { Card, Elevation } from '@blueprintjs/core';
import AuthService from '../../services/auth/AuthService';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
    this.Auth = new AuthService();
  }

  getUser() {
    let data = this.Auth.getProfile();
    return data;
  }

  getRegistrationDate() {
    let date = this.Auth.getProfile().subject.createdAt;
    return date.substring(5, 7) + '/' + date.substring(0, 4);
  }

  render() {
    const username = this.getUser().subject.username;
    const date = this.getRegistrationDate();
    const events = this.getUser().subject.eventsCreated;
    return (
      <div className="profile-container">
        <div className="profile-top" id="top">
          <Card
            interactive={true}
            elevation={Elevation.TWO}
            className="profile-card">
            <img src={avatar} alt="" />
            <p>{username}</p>
            <p>User Since: {date}</p>
          </Card>
        </div>
        <div className="profile-bottom" id="bottom">
          <div className="tabbed">
            <input
              name="tabbed"
              id="tabbed1"
              type="radio"
              checked
              readOnly={true}
            />
            <section>
              <h1>
                <label htmlFor={'tabbed1'}>Events</label>
              </h1>
              <div>
                {events.map((events, index) => {
                  return (
                    <div key={index}>
                      <Link to={'/events/:eventId'}>
                        <h1>{events.title}</h1>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>

            <input
              name="tabbed"
              id="tabbed2"
              type="radio"
              checked
              readOnly={true}
            />
            <section>
              <h1>
                <label htmlFor={'tabbed2'}>Attending</label>
              </h1>
              <div />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
