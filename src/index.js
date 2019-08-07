import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import About from './components/about/About';
import AllEvents from './components/events/allEvents/AllEvents';
import Event from './components/events/event/Event';
import UserProfile from './components/profile/user/Profile';
import NewEvent from './components/events/newEvent/NewEvent';

const appRoutes = (
  <Router>
    <Navbar />
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/events/new" component={NewEvent} />
      <Route exact path="/events" component={AllEvents} />
      <Route exact path="/events/eventId" component={Event} />
      <Route exact path="/user/profile" component={UserProfile} />
    </div>
  </Router>
);

ReactDOM.render(appRoutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
