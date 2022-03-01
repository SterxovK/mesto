import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { config, initialCards } from "./constants.js";
//Константы для открытия попапа редактирования профиля
const editBtn = document.querySelector(".profile-intro__edit-button");
const editForm = document.querySelector(".popup_type_edit-profile");
//Константа папа добавленя карточек
const addCardForm = document.querySelector(".popup_type_add-cards");

export const popupClass = "popup_opened";
export const activeHeartClass = "card__heart_active";

//Константа формы отправки импута
const popupForm = document.querySelector(".popup__form");
//имя и работа в попапе редактирования профиля
const nameInput = document.querySelector(".popup__field_with_name");
const jobInput = document.querySelector(".popup__field_with_job");
//имя и работа на странице
const introName = document.querySelector(".profile-intro__title");
const introJob = document.querySelector(".profile-intro__sabtitle");

export const popupTypeShowCards = document.querySelector(
  ".popup_type_show-cards"
);
export const popupCaption = document.querySelector(".popup__caption");
export const popupImage = document.querySelector(".popup__image");

//Слушатель и функция открытия попапа редактирования профиля
editBtn.addEventListener("click", () => {
  openPopup(editForm);
  nameInput.value = introName.textContent;
  jobInput.value = introJob.textContent;
});

//Слушатель и функция присовения значений по клику на Сохранить попапа редактирования профиля
popupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  introName.textContent = nameInput.value;
  introJob.textContent = jobInput.value;
  closePopup(editForm);
});

//кнопка для открытия попапа добавления карточек
const addBtn = document.querySelector(".profile__add-button");
//Слушатель и функция открытия попапа добавления карточек
addBtn.addEventListener("click", () => {
  openPopup(addCardForm);
  addFormValidator.enableValidation();
});

const cardTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".cards__list");

//ТУТ НУЖЕН ИМПОРТ КЛАССА КАРД
// Создание карточек через массив
initialCards.forEach((initialCard) => {
  // Создадим экземпляр карточки
  const card = new Card(
    {
      name: initialCard.name,
      link: initialCard.link,
    },
    cardTemplate
  );
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
});

const nameCardInput = document.querySelector(".popup__field_with_card-name");
const linkCardInput = document.querySelector(".popup__field_with_card-link");
const formAddCard = document.querySelector(".popup__form-add-card");
const saveBtn = formAddCard.querySelector(".popup__save-button");


  const card = new Card(
    {
      name: nameCardInput.value,
      link: linkCardInput.value,
    },
    cardTemplate
  );
  const cardElement = card.generateCard();
  cardList.prepend(cardElement);
  clearField();
  closePopup(addCardForm);



//добавил массив всех попапов и навесил удаление по проверке клика на оверлей и крестсик
const popups = document.querySelectorAll(".popup");
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

//функция открытия попапов

function openPopup(popup) {
  popup.classList.add(popupClass);
  document.addEventListener("keydown", closeByEscape);
}

//функция закрытия попапов - обработчик esc
function closePopup(popup) {
  popup.classList.remove(popupClass);
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    // найти открытый попап
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}



const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
