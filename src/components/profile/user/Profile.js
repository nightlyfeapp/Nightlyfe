import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="profile-top">
          <h1>Profile Header</h1>
        </div>
        <div className="profile-bottom">
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
