export class UserInfo {
  constructor({ introNameSelector, introJobSelector, avatarSelector }) {
    this._introNameSelector = introNameSelector;
    this._introJobSelector = introJobSelector;
    this._avatarSelector = avatarSelector;
    this._name = document.querySelector(this._introNameSelector);
    this._job = document.querySelector(this._introJobSelector);
    this._avatar = document.querySelector(this._avatarSelector);
  }
  getUserInfo() {
    const data = {
      name: this._name.textContent,
      about: this._job.textContent,
      avatar: this._avatar.src
    };
    return data;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
     this.setUserAvatar(data);
     this._avatar.alt = `${data.name} avatar`;
  }
  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
