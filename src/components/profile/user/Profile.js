import React, { Component } from 'react';
import './Profile.css';

import avatar from '../../../assets/images/8c46965de03827dc2a05e4c77eb110db--batman-comics.jpg';
import { Card, Elevation } from '@blueprintjs/core';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-top" id="top">
          <Card
            interactive={true}
            elevation={Elevation.TWO}
            className="profile-card">
            <img src={avatar} alt="" />
            <p>Username</p>
            <p>User Since</p>
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
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
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
              <div>
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
