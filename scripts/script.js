//Константы для открытия попапа редактирования профиля
const editBtn = document.querySelector(".profile-intro__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupClass = "popup_opened";

const activeHeartClass = "card__heart_active";
//Константа формы отправки импута
const popupForm = document.querySelector(".popup__form");

//имя и работа в попапе редактирования профиля
const nameInput = document.querySelector(".popup__field_with_name");
const jobInput = document.querySelector(".popup__field_with_job");
//имя и работа на странице
const introName = document.querySelector(".profile-intro__title");
const introJob = document.querySelector(".profile-intro__sabtitle");

const popupAddCard = document.querySelector(".popup_type_add-cards");

const popupTypeShowCards = document.querySelector(".popup_type_show-cards");
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");

//Слушатель и функция открытия попапа редактирования профиля
editBtn.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = introName.textContent;
  jobInput.value = introJob.textContent;
});

//Слушатель и функция присовения значений по клику на Сохранить попапа редактирования профиля
popupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  introName.textContent = nameInput.value;
  introJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

//кнопка для открытия попапа добавления карточек
const addBtn = document.querySelector(".profile__add-button");
//Слушатель и функция открытия попапа добавления карточек
addBtn.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//массив 6 карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".cards__list");
const formAddCard = document.querySelector(".popup__form-add-card");

// Функция создания новой карточки
function createCard(name, link) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");
  const heart = newCard.querySelector(".card__heart");
  cardImage.style.backgroundImage = `url('${link}')`;
  cardTitle.textContent = name;
  removeNewCard(newCard);
  activeHeart(heart);
  cardImage.addEventListener("click", (event) => {
    event.preventDefault();
    openPopup(popupTypeShowCards);
    //Присвоить значения переменных
    popupCaption.textContent = cardTitle.textContent;
    //ПОЛУЧИТЬ http БЕЗ УРЛ!!!!
    const imgHttp = cardImage.style.backgroundImage.replace(/(url\(|\)|")/g,"");
    popupImage.src = imgHttp;
    popupImage.alt = "Фото " + popupCaption.textContent;
  });
  return newCard;
}
// Создание карточек через массив
initialCards.forEach((card) =>
  cardList.prepend(createCard(card.name, card.link))
);

const nameCardInput = document.querySelector(".popup__field_with_card-name");
const linkCardInput = document.querySelector(".popup__field_with_card-link");
// Создание карточки через импут
formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  cardList.prepend(createCard(nameCardInput.value, linkCardInput.value));
  nameCardInput.value = "";
  linkCardInput.value = "";
  closePopup(popupAddCard);
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
function removeNewCard(element) {
  element.querySelector(".card__basket").addEventListener("click", (event) => {
    element.remove();
  });
}
//функция активации лайка
function activeHeart(element) {
  element.addEventListener("click", (event) => {
    element.classList.add(activeHeartClass);
  });
}

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add(popupClass);
}

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove(popupClass);
}

