export class Card {
  constructor(
    data,
    cardTemplate,
    ownerId,
    { handleCardClick, handleRemoveCard, handleLikeClick, handleRemoveLike }
  ) {
    this._data = data;
    this._cardTemplate = cardTemplate;
    this._ownerId = ownerId;

    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;
    this._handleLikeClick = handleLikeClick;
    this._handleRemoveLike = handleRemoveLike;
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
    this._cardCounterLikes = this._element.querySelector(
      ".card__counter-likes"
    );
    this._heartActiveClass = "card__heart_active";
    this._cardImage.style.backgroundImage = `url('${this._data.link}')`;
    this._cardTitle.textContent = this._data.name;

    this._checkOwnerId();
    this._checkLikedState();

    this._setEventListeners();
    //установка значенияя кол-ва лайков
    this.setLikeCount(this._data);

    return this._element;
  }

  _checkOwnerId() {
    if (this._ownerId !== this._data.owner._id) {
      this._removeCardBasket(this._cardBasket);
    }
  }
  _checkLikedState() {
    this._data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._ownerId) {
        this._handleActiveHeart();
      }
    });
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }

  _removeCardBasket(element) {
    element.remove();
    element = null;
  }

  setLikeCount(data) {
    this._cardCounterLikes.textContent = String(data.likes.length);
  }

  _handleActiveHeart() {
    this._cardHeart.classList.toggle(this._heartActiveClass);
  }

  _setEventListeners() {
    this._cardBasket.addEventListener("click", this._handleRemoveCard);

    //ИЗМЕНИТЬ ЛОГИКУ НАЖАТИЯ НА СЕРДЦЕ
    this._cardHeart.addEventListener("click", () => {
       if (this._cardHeart.classList.contains(this._heartActiveClass)) {
         this._handleRemoveLike(this._data);
         this._handleActiveHeart();
       } else {
         this._handleLikeClick(this._data);
         this._handleActiveHeart();
       }
    });
       
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._data);
    });
  }
}
