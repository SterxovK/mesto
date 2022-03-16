export class Card {
  constructor(data, cardTemplate, { handleCardClick }) {
    this._data = data;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
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
    ).style.backgroundImage = `url('${this._data.link}')`;
    this._element.querySelector(".card__title").textContent = this._data.name;
    return this._element;
  }

  _handleRemoveNewCardClick() {
    this._element.remove();
    this._element = null;
  }

  _handleActiveHeart() {
    this._element
      .querySelector(".card__heart")
      .classList.toggle("card__heart_active");
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
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });
  }
}
