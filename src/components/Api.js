export default class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }
  _makeRequest(promise) {
    return promise
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Ошибка запроса";
      })
      .then((obj) => {
        console.log(obj);
        return obj;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }
  getUserInfo() {
    const promise = fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        authorization: this._headers,
      },
    });
    return this._makeRequest(promise);
  }

  getInitialCards() {
    const promise = fetch(`${this._url}cards`, {
      method: "GET",
      headers: {
        authorization: this._headers,
      },
    });
    return this._makeRequest(promise);
  }
  setUserInfo(data) {
    const promise = fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
    return this._makeRequest(promise);
  }

  setNewCards(data) {
    const promise = fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    return this._makeRequest(promise);
  }

  deleteCard(data) {
    const promise = fetch(`${this._url}cards/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._headers,
      },
    });
    return this._makeRequest(promise);
  }
  setLikes(data) {
    const promise = fetch(`${this._url}cards/${data._id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._headers,
      },
    });
    return this._makeRequest(promise);
  }
  deleteLikes(data) {
    const promise = fetch(`${this._url}cards/${data._id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._headers,
      },
    });
    return this._makeRequest(promise);
  }

  setUserAvatar(data) {
    const promise = fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
    return this._makeRequest(promise);
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }
}
