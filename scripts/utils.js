import { popupClass } from "./constants.js";
//функция открытия попапов + обработчик esc
export function openPopup(popup) {
  popup.classList.add(popupClass);
  document.addEventListener("keydown", closeByEscape);
}

//функция закрытия попапов - обработчик esc
export function closePopup(popup) {
  popup.classList.remove(popupClass);
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    // найти открытый попап
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
