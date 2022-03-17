export class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardListSelector);
  }

 

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
