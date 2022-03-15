import Popup from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._imageCaption = this._popupElement.querySelector(".popup__caption");
  }

  //* Перезапись родительского метода
  open(data) {
    super.open();
    this._image.src = data.link;
    this._image.alt = `Изображение ${data.name}`;
    this._imageCaption.textContent = data.name;
  }
}
