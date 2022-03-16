export class UserInfo {
  constructor({ introNameSelector, introJobSelector }) {
    this._introNameSelector = introNameSelector;
    this._introJobSelector = introJobSelector;
    this._name = document.querySelector(this._introNameSelector);
    this._job = document.querySelector(this._introJobSelector);
  }
  getUserInfo() {
    const data = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return data;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  }
}
