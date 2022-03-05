import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { config, initialCards } from "./constants.js";
import { openPopup, closePopup } from "./utils.js";

//Константы для открытия попапа редактирования профиля
const editBtn = document.querySelector(".profile-intro__edit-button");
const editForm = document.querySelector(".popup_type_edit-profile");
//Константа папа добавленя карточек
const addCardForm = document.querySelector(".popup_type_add-cards");
//Константа формы отправки импута
const popupForm = document.querySelector(".popup__form");
//имя и работа в попапе редактирования профиля
const nameInput = document.querySelector(".popup__field_with_name");
const jobInput = document.querySelector(".popup__field_with_job");
//имя и работа на странице
const introName = document.querySelector(".profile-intro__title");
const introJob = document.querySelector(".profile-intro__sabtitle");
//кнопка для открытия попапа добавления карточек
const addBtn = document.querySelector(".profile__add-button");
//Поля формы
const nameCardInput = document.querySelector(".popup__field_with_card-name");
const linkCardInput = document.querySelector(".popup__field_with_card-link");
//шаблон попапа
const cardTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".cards__list");

//owerlay
const popups = document.querySelectorAll(".popup");

const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const addImage = 
    { name: nameCardInput.value, 
      link: linkCardInput.value 
    }
  cardList.prepend(renderCard(addImage));
  closePopup(addCardForm);
  clearField();
};

const renderCard = (data) => {
  const card = new Card(data, cardTemplate);
  const cardElement = card.generateCard();
  return cardElement;
  //cardList.prepend(cardElement);
};

// Создание карточки через массив
initialCards.forEach((data) => {
  cardList.prepend(renderCard(data));
  
});
// слушатель Создание карточки через импут
addCardForm.addEventListener("submit", handleCardFormSubmit);

function clearField() {
  nameCardInput.value = "";
  linkCardInput.value = "";
}

//Слушатель и функция открытия попапа редактирования профиля
editBtn.addEventListener("click", () => {
  nameInput.value = introName.textContent;
  jobInput.value = introJob.textContent;
  openPopup(editForm);
});

//Слушатель и функция присовения значений по клику на Сохранить попапа редактирования профиля
popupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  introName.textContent = nameInput.value;
  introJob.textContent = jobInput.value;
  closePopup(editForm);
});

//Слушатель и функция открытия попапа добавления карточек
addBtn.addEventListener("click", () => {
  addFormValidator.disableSabmitButton();
  openPopup(addCardForm);
});

//добавил массив всех попапов и навесил удаление по проверке клика на оверлей и крестсик
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }

    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});


