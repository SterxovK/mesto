export class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardListSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
