export default class Service {
  _apiBase = 'http://localhost:5000/api';

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.json();
  };

  addResourse = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.ok;
  };

  updateResourse = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.ok;
  };

  deleteResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.ok;
  };

  getAllUniversity = async () => {
    return await this.getResourse(`/university/`);
  };
  addUniversity = async (university) => {
    return await this.addResourse('/university/', university);
  };
  updateUniversity = async (university) => {
    return await this.updateResourse(
      `/university/${university._id}`,
      university
    );
  };

  removeUniversity = async (university) => {
    return await this.deleteResourse(`/university/${university._id}`);
  };

  getAllCity = async () => {
    return await this.getResourse(`/city/`);
  };
  getAllType = async () => {
    return await this.getResourse(`/type/`);
  };
}
