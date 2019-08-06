import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthService {
  constructor(url) {
    this.url = url || 'https://nightlyfe-server.herokuapp.com';
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

  signup(username, email, password) {
    return axios
      .post('https://nightlyfe-server.herokuapp.com/auth/signup', {
        username,
        email,
        password
      })
      .then(res => {
        console.log(res);
        this.setToken(res.data.token);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  login(username, password) {
    return axios
      .post('https://nightlyfe-server.herokuapp.com/auth/login', {
        username,
        password
      })
      .then(res => {
        console.log(res);
        this.setToken(res.data.token);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}
