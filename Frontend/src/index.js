import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import About from './components/about/About';
import AllEvents from './components/events/allEvents/AllEvents';
import Event from './components/events/event/Event';

const appRoutes = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/events" component={AllEvents} />
      <Route path="/events/:eventId" component={Event} />
    </div>
  </Router>
);

ReactDOM.render(appRoutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
