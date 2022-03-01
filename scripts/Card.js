import {
  activeHeartClass,
  popupImage,
  popupCaption,
  popupTypeShowCards,
  popupClass,
} from "./script.js";

export class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }
  _getTemplate() {
    const newCard = this._cardTemplate.querySelector(".card").cloneNode(true);
    return newCard;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${this._link}')`;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__basket")
      .addEventListener("click", () => {
        this._handleRemoveNewCardClick();
      });
    this._element
      .querySelector(".card__heart")
      .addEventListener("click", () => {
        this._handleActiveHeart();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this._handleOpenPopup();
      });
  }

  _handleRemoveNewCardClick() {
    this._element.remove();
  }
  _handleActiveHeart() {
    this._element
      .querySelector(".card__heart")
      .classList.toggle(activeHeartClass);
  }
  _handleOpenPopup() {
    popupImage.src = this._element
      .querySelector(".card__image")
      .style.backgroundImage.replace(/(url\(|\)|")/g, "");
    popupImage.alt = "Фото " + popupCaption.textContent;
    popupCaption.textContent =
      this._element.querySelector(".card__title").textContent;
    popupTypeShowCards.classList.toggle(popupClass);
  }
}

