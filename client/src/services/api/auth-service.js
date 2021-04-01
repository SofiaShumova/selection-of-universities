export default class Auth {
  _currentUser = null;
  constructor() {
    this._currentUser = this._checkLocalStorage() || this._getMockUser('ADMIN');
  }
  _getMockUser(role) {
    return { role };
  }
  _checkLocalStorage() {
    return localStorage.getItem('user') || null;
  }
  getUser() {
    return this._currentUser;
  }
}
