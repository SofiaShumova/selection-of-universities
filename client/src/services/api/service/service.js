export default class Service {
  _apiBase = 'http://localhost:5000/api';

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.json();
  };

  getAllUniversity = async () => {
    return await this.getResourse(`/university/`);
  };
  getAllCity = async () => {
    return await this.getResourse(`/city/`);
  };
  getAllType = async () => {
    return await this.getResourse(`/type/`);
  };
}
