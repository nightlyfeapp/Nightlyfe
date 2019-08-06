import decode from 'jwt-decode';

export default class AuthService {
  constructor(url) {
    this.url = url || 'https://nightlyfe-server.herokuapp.com';
    this.fetch = this.fetch.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  setToken(token) {
    localStorage.setItem('nl_token', token);
  }

  getToken() {
    return localStorage.getItem('nl_token');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return err & false;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.is;
  }

  logout() {
    localStorage.removeItem('nl_token');
  }

  fetch(url, options) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    }).then(res => res.json());
  }

  signup(username, email, password) {
    return this.fetch(`${this.url}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then(res => {
        this.setToken(res.token);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  login(username, password) {
    return this.fetch(`${this.url}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => {
        this.setToken(res.token);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}
