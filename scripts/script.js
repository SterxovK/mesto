import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { config, initialCards } from "./constants.js";
//Константы для открытия попапа редактирования профиля
const editBtn = document.querySelector(".profile-intro__edit-button");
const editForm = document.querySelector(".popup_type_edit-profile");
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

//const addCardForm = document.querySelector(".popup_type_add-cards");

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

//массив 6 карточек
// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const cardTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".cards__list");
const formAddCard = document.querySelector(".popup__form-add-card");

// Функция создания новой карточки
//function createCard(name, link) {
//  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
//  const cardImage = newCard.querySelector(".card__image");
//  const cardTitle = newCard.querySelector(".card__title");
//  const heart = newCard.querySelector(".card__heart");
//  cardImage.style.backgroundImage = `url('${link}')`;
//  cardTitle.textContent = name;
//  removeNewCard(newCard);
//  activeHeart(heart);
//  cardImage.addEventListener("click", (event) => {
//    event.preventDefault();
//    openPopup(popupTypeShowCards);
//Присвоить значения переменных
//    popupCaption.textContent = cardTitle.textContent;
//ПОЛУЧИТЬ http БЕЗ УРЛ!!!!
//    const imgHttp = cardImage.style.backgroundImage.replace(/(url\(|\)|")/g,"");
//    popupImage.src = imgHttp;
//    popupImage.alt = "Фото " + popupCaption.textContent;
//  });
//  return newCard;
//}
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
// Создание карточки через импут
formAddCard.addEventListener("submit", (event) => {
  event.preventDefault();
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
});

//добавил массив всех крестиков попапов и навесил удаление
const popupCloseArr = document.querySelectorAll(".popup__close");
popupCloseArr.forEach((popupClose) => {
  popupClose.addEventListener("click", (event) => {
    event.preventDefault();
    closePopup(popupClose.closest(".popup"));
  });
});

//функция удаления карточек
//function removeNewCard(element) {
//  element.querySelector(".card__basket").addEventListener("click", (event) => {
//    element.remove();
//  });
//}
//функция активации лайка
//function activeHeart(element) {
//  element.addEventListener("click", (event) => {
//    element.classList.add(activeHeartClass);
//  });
//}

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add(popupClass);
}

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove(popupClass);
}

//owerlay && esc
const popupArr = document.querySelectorAll(".popup");
const page = document.querySelector(".page");
popupArr.forEach((popup) => {
  page.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      clearField();
      closePopup(popup);
    }
  });
  page.addEventListener("click", (event) => {
    if (event.target === popup) {
      clearField();
      closePopup(popup);
    }
  });
});

function clearField() {
  nameCardInput.value = "";
  linkCardInput.value = "";
}
// const config = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__field",
//   submitButtonSelector: ".popup__save-button",
//   inactiveButtonClass: "popup__save-button_inactive",
//   inputErrorClass: "popup__field_type_error",
//   errorClass: "popup__field-error_active",
// };
const addCardForm = document.querySelector(".popup_type_add-cards");

const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
