export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    const { inputSelector, submitButtonSelector } = this._settings;
    this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
    this._submitButtonSelector = this._form.querySelector(submitButtonSelector);
  }
  _showInputError = (inputElement, errorMessage) => {
    const { errorClass, inputErrorClass } = this._settings;
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (inputElement) => {
    const { errorClass, inputErrorClass } = this._settings;
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _disableSabmitButton = () => {
    const { inactiveButtonClass } = this._settings;
    this._submitButtonSelector.classList.add(inactiveButtonClass);
    this._submitButtonSelector.disabled = true;
  };
  _enableButtonstate = () => {
    const { inactiveButtonClass } = this._settings;
    this._submitButtonSelector.classList.remove(inactiveButtonClass);
    this._submitButtonSelector.disabled = false;
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSabmitButton();
    } else {
      this._enableButtonstate();
    }
  }

  _setEventListeners() {
      this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",  () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit",  (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
