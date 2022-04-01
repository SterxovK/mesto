import Popup from './Popup.js';

export default class PopupWithRemoveComfirm extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector);
    this._popupElement = document.querySelector(this._popupSelector);
    this._form = this._popupElement.querySelector(".popup__form");
    this._submit = submit;
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
  }
  _submitEvtHandler(evt) {
    evt.preventDefault();
    this._submit(this._data);
    //this._form.removeEventListener("submit", this._submitEvtHandler);
  }
  setEventListeners() {
    this._form.addEventListener("submit", this._submitEvtHandler);
    //console.log("обработчик установлен");
    super.setEventListeners();
  }
  removeEventListener() {
    super.removeEventListener();
    //console.log("обработчик удален");
    this._form.removeEventListener("submit", this._submitEvtHandler);
  }
  open(data) {
    this._data = data;
    super.open();
  }
}