//Константы для открытия попапа редактирования профиля
const editBtn = document.querySelector('.profile-intro__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupClass = 'popup_opened';

const activeHeartClass = 'card__heart_active';
//Константа формы отправки импута
const popupForm = document.querySelector('.popup__form');

//имя и работа в попапе редактирования профиля
const nameInput = document.querySelector('.popup__field_with_name');
const jobInput = document.querySelector('.popup__field_with_job');
//имя и работа на странице
const introName = document.querySelector('.profile-intro__title');
const introJob = document.querySelector('.profile-intro__sabtitle');

const popupTypeShowCards = document.querySelector('.popup_type_show-cards');
const popupCaption = document.querySelector('.popup__caption');
const popupImage = document.querySelector('.popup__image');

//Слушатель и функция открытия попапа редактирования профиля
editBtn.addEventListener('click', () => {
  popupEditProfile.classList.add(popupClass);
  nameInput.value = introName.textContent;
  jobInput.value = introJob.textContent;
});

//Слушатель и функция присовения значений по клику на Сохранить попапа редактирования профиля
popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  introName.textContent = nameInput.value;
  introJob.textContent = jobInput.value;
  closeSavePopup(popupForm);
});

//кнопка для открытия попапа добавления карточек
const addBtn = document.querySelector('.profile__add-button');
//Слушатель и функция открытия попапа добавления карточек
addBtn.addEventListener('click', () => {
  const popupAddCard = document.querySelector('.popup_type_add-cards');
  popupAddCard.classList.add(popupClass);
});

//массив 6 карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
//добавляем шаблон карточки из template
const cardTemplate = document.querySelector('#template-card').content;
const cardList = document.querySelector('.cards__list');

//функция заполнения шаблона значениями из массива карточек
function AddCardsArr(card) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  cardImage.style.backgroundImage = `url('${card.link}')`;
  cardTitle.textContent = card.name;
  //удаление при нажатии на корзину
  removeNewCard(newCard);
  //вставить новую карточку в картлист
  cardList.append(newCard);
  //активация лайка
  const heart = newCard.querySelector('.card__heart');
  activeHeart(heart);
  //открытие попапа через клик по изображению карточки добавленного из массива
  cardImage.addEventListener('click', (event) => {
    event.preventDefault();
    popupTypeShowCards.classList.add(popupClass);
    //Присвоить значения переменных
    popupCaption.textContent = cardTitle.textContent;
    //ПОЛУЧИТЬ http БЕЗ УРЛ!!!!
    const imgHttp = cardImage.style.backgroundImage.replace(/(url\(|\)|")/g, '');
    popupImage.src = imgHttp;
  });
}
//идем по массиву и добавляем значения
initialCards.forEach((card) => AddCardsArr(card));

//ДОБАВЛЕНИЕ КАРТОЧЕК ЧЕРЕЗ ПОПАП
//имяКарточки и ссылкаКарточки в попапе
const nameCardInput = document.querySelector('.popup__field_with_card-name');
const linkCardInput = document.querySelector('.popup__field_with_card-link');
//переменная формы
const formAddCard = document.querySelector('.popup__form-add-card');

//функция добавления карточек через импут
function AddCardsInput() {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardName = nameCardInput.value;
  const cardLink = linkCardInput.value;
  cardImage.style.backgroundImage = `url('${cardLink}')`;
  cardTitle.textContent = cardName;
  //удаления при нажатии на корзину
  removeNewCard(newCard);
  //Активация лайка
  const heart = newCard.querySelector('.card__heart');
  activeHeart(heart);
  //Вставить новую карточку в начало списка
  cardList.prepend(newCard);
  //обнулим значение импута
  nameCardInput.value = '';
  linkCardInput.value = '';

  //открытие попапа через клик по изображению карточки добавленную через импут
  cardImage.addEventListener('click', (event) => {
    event.preventDefault();
    popupTypeShowCards.classList.add(popupClass);
    //Присвоить значения переменных
    popupCaption.textContent = cardTitle.textContent;
    //ПОЛУЧИТЬ http БЕЗ УРЛ!!!!
    const imgHttp = cardImage.style.backgroundImage.replace(/(url\(|\)|")/g, '');
    popupImage.src = imgHttp;
  });
}
//Слушатель нажатия сохранить и функиции добавления и закрытия
formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  AddCardsInput();
  closeSavePopup(formAddCard);
});

//добавил массив всех крестиков попапов и навесил удаление
const popupCloseArr = document.querySelectorAll('.popup__close');
popupCloseArr.forEach((popupClose) => {
  popupClose.addEventListener('click', (event) => {
    event.preventDefault();
    closeSavePopup(popupClose);
  });
});

//функция закрытия попапа при нажатии на сохранить
function closeSavePopup(element) {
  element.closest('.popup').classList.remove(popupClass);
}
//функция удаления карточек
function removeNewCard(element) {
  element.querySelector('.card__basket').addEventListener('click', (event) => {
    element.remove();
  });
}
//функция активации лайка
function activeHeart(element) {
  element.addEventListener('click', (event) => {
    element.classList.add(activeHeartClass);
  });
}
