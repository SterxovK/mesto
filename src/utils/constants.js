export const editBtn = document.querySelector(".profile-intro__edit-button");
export const editForm = document.querySelector(".popup_type_edit-profile");
export const addCardForm = document.querySelector(".popup_type_add-cards");

export const nameInput = document.querySelector(".popup__field_with_name");
export const jobInput = document.querySelector(".popup__field_with_job");

//кнопка для открытия попапа добавления карточек
export const addBtn = document.querySelector(".profile__add-button");
//шаблон попапа
export const cardTemplate = document.querySelector("#template-card").content;
//Селектор контейнера куда будем добавлять карточки
export const cardListSelector = ".cards__list";

//Селекторы полей профиля
export const introNameSelector = ".profile-intro__title";
export const introJobSelector = ".profile-intro__sabtitle";
export const avatarSelector = ".profile__avatar";

export const popupTypeShowCardsSelector = ".popup_type_show-cards";

//Селекторы попапов удаления карточки и редактирования аватара
export const popupWithRemoveComfirmSelector = ".popup_type_remove-cards";
export const popupEditAvatarSelector = ".popup_type_edit-avatar";

//Константа папа добавленя карточек
export const addCardFormSelector = ".popup_type_add-cards";
export const popupEditProfileSelector = ".popup_type_edit-profile";

//константа кнопки изменения аватара и открытия попапа
export const editAvatarBtn = document.querySelector(".profile__avatar-edit-button");

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__field_type_error",
};

// export const initialCards = [
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
