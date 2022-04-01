import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { callBackSubmitForm }) {
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._form = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(
      ".popup__save-button"
    );
    this._popupFieldArr = this._form.querySelectorAll(".popup__field");
    this._initialValueSubmitButton = this._submitButton.textContent;
    this._handlerSubmitEvt = this._hendlerSubmitEvt.bind(this);
  }

  loading(isLoading, initialDownloadMessage = "Cохранение...") {
    if (isLoading) {
      this._submitButton.textContent = initialDownloadMessage;
    } else {
      this._submitButton.textContent = this._initialValueSubmitButton;
    }
  }

  _getInputValues() {
    this._inputs = Array.from(this._popupFieldArr);
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
    this._form.reset();
    super.close();
    //this._form.removeEventListener("submit", this._handlerSubmitEvt);
  }
  removeEventListener() {
    super.removeEventListener();
    //console.log('f')
    this._form.removeEventListener("submit", this._handlerSubmitEvt);
  }
}
