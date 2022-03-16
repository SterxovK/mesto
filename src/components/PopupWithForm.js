import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { callBackSubmitForm }) {
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__field"));
    this._handlerSubmitEvt = this._hendlerSubmitEvt.bind(this);
  }

  _getInputValues() {
    const data = {};
    this._inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }
  _hendlerSubmitEvt(evt) {
    evt.preventDefault();
    this._callBackSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handlerSubmitEvt);
  }

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener("submit", this._handlerSubmitEvt);
  }
}
