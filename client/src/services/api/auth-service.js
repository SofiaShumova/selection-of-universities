import BaseService from './base-service';
const TOKEN = 'token';
const USER = 'user';
export default class Auth extends BaseService {
  _currentUser = null;
  get user() {
    return this._currentUser;
  }
  constructor() {
    super();
    const { user, token } = this._checkLocalStorage();
    this._currentUser = user;
    this._token = token;
    this.observers = [];
  }
  _getMockUser(role) {
    return { role };
  }
  _checkLocalStorage() {
    return {
      user: JSON.parse(localStorage.getItem(USER)) || null,
      token: JSON.parse(localStorage.getItem(TOKEN)) || null,
    };
  }
  getUser() {
    return this._currentUser;
  }
  login = async ({ login, password }) => {
    const { token, user } = await this.addResourse('/auth', {
      login,
      password,
    });
    this._currentUser = user;
    this._token = token;
    localStorage.setItem(USER, JSON.stringify(user));
    localStorage.setItem(TOKEN, JSON.stringify(token));
    this.updateValue();
  };
  logout = async () => {
    this._currentUser = null;
    this._token = null;
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);
    this.updateValue();
  };
  addObserver = (callback) => {
    this.observers.push(callback);
  };
  removeObserver = (callback) => {
    const index = this.observers.indexOf(callback);
    if (index !== -1) this.observers.splice(index, 1);
  };
  updateValue = () => {
    this.observers.forEach((callback) => callback(this._currentUser));
  };
  updateValueWithServer = async () => {
    console.log(this._currentUser);

    this._currentUser = await this.getResourse(
      `/user/${this._currentUser._id}`
    );
    localStorage.removeItem(USER);
    localStorage.setItem(USER, JSON.stringify(this._currentUser));

    this.updateValue();
    console.log(this._currentUser);
  };
}
