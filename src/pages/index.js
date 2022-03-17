import "./index.css";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  initialCards,
  editBtn,
  editForm,
  addCardForm,
  nameInput,
  jobInput,
  addBtn,
  cardTemplate,
  cardListSelector,
  introNameSelector,
  introJobSelector,
  popupTypeShowCardsSelector,
  addCardFormSelector,
  popupEditProfileSelector,
} from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const photoPopup = new PopupWithImage(popupTypeShowCardsSelector);

const createNewCard = (data) => {
  const card = new Card(data, cardTemplate, {
    handleCardClick: (data) => {
      photoPopup.open(data);
    },
  });
  return card;
};

const section = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = createNewCard(data);
      const cardElement = card.generateCard();
      section.addItem(cardElement);
    },
  },
  cardListSelector
);
section.renderItems();

const popupWithAddForm = new PopupWithForm(addCardFormSelector, {
  callBackSubmitForm: (data) => {
    const card = createNewCard(data);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    popupWithAddForm.close();
  },
});

const userInfo = new UserInfo({ introNameSelector, introJobSelector });

const popupWithInfoForm = new PopupWithForm(popupEditProfileSelector, {
  callBackSubmitForm: (data) => {
    userInfo.setUserInfo(data);
    popupWithInfoForm.close();
  },
});

// const editFormValidator = new FormValidator(config, editForm);
// const addFormValidator = new FormValidator(config, addCardForm);
// editFormValidator.enableValidation();
// addFormValidator.enableValidation();

const formValidators = {};
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");
    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);


editBtn.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupWithInfoForm.open();
  //editFormValidator.resetValidation();
  formValidators["editProfile"].resetValidation();
});

addBtn.addEventListener("click", () => {
  popupWithAddForm.open();
  //addFormValidator.resetValidation();
  formValidators["addCard"].resetValidation();
});
