const showInputError = (
  formSelector,
  inputElement,
  errorMessage,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formSelector,
  inputElement,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formSelector,
  inputElement,
  errorClass,
  inputErrorClass
) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formSelector,
      inputElement,
      inputElement.validationMessage,
      errorClass,
      inputErrorClass
    );
  } else {
    hideInputError(formSelector, inputElement, errorClass, inputErrorClass);
  }
};

const setEventListeners = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  errorClass,
  inputErrorClass,
}) => {
  const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
  const submitButton = formSelector.querySelector(submitButtonSelector);
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, submitButton, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formSelector,
        inputElement,
        errorClass,
        inputErrorClass
      );
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });
};

const enableValidation = (settings) => {
  const { formSelector: formSelectorClass } = settings;
  const formList = Array.from(document.querySelectorAll(formSelectorClass));
  formList.forEach((selector) => {
    selector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners({
      ...settings,
      formSelector: selector
    });
  });
};

//enableValidation();
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
});

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(
  inputList,
  selector,
  inactiveButtonClass
) {
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    selector.classList.add(inactiveButtonClass);
    selector.setAttribute("disabled", "disabled");
  } else {
    // иначе сделай кнопку активной
    selector.classList.remove(inactiveButtonClass);
    selector.removeAttribute("disabled", "disabled");
  }
}
