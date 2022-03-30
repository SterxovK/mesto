export class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardListSelector);
  }

 

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems(cardsData) {
    cardsData.forEach((item) => {
      this._renderer(item);
    });
  }
}
