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
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardHeart = this._element.querySelector(".card__heart");
    this._cardBasket = this._element.querySelector(".card__basket");

    this._setEventListeners();
    this._cardImage.style.backgroundImage = `url('${this._data.link}')`;
    this._cardTitle.textContent = this._data.name;
    return this._element;
  }

  _handleRemoveNewCardClick() {
    this._element.remove();
    this._element = null;
  }

  _handleActiveHeart() {
    this._cardHeart.classList.toggle("card__heart_active");
  }

  _setEventListeners() {
    this._cardBasket.addEventListener("click", () => {
      this._handleRemoveNewCardClick();
    });
    this._cardHeart.addEventListener("click", () => {
      this._handleActiveHeart();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }
}
