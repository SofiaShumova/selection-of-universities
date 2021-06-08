export default class BaseService {
  _apiBase = process.env.REACT_APP_API_BASE;
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
      console.log(await res.json());
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.json();
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
}
