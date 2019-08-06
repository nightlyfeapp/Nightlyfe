import decode from 'jwt-decode';

export default class AuthService {
  constructor(url) {
    this.url = url || 'https://nightlyfe-server.herokuapp.com';
    this.fetch = this.fetch.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
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
