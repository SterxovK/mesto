let editButton = document.querySelector('.profile-intro__edit-button');
let popupOpen = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close');
const popupClass = "popup_opened";
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_with_name');
let jobInput = document.querySelector('.popup__field_with_job');
let introName = document.querySelector('.profile-intro__title');
let introJob = document.querySelector('.profile-intro__sabtitle');

function editProfile() {
    //console.log('Мы кликнули по edit');
    popupOpen.classList.add(popupClass);
    nameInput.value = introName.textContent;
    jobInput.value = introJob.textContent;
}

function popupClose(evt) {
    evt.preventDefault();
    //console.log('Мы кликнули по крестику');
    popupOpen.classList.remove(popupClass);
}

editButton.addEventListener('click', editProfile);
popupCloseBtn.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    
    introName.textContent = nameInput.value;
    introJob.textContent = jobInput.value;
    popupClose(evt);
}
popupForm.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
//добавляем карточки из template
const cardTemplate = document.querySelector('#template-card').content;
const cardList = document.querySelector('.cards__list');

function galleryAddItems(card) {
const item = cardTemplate.querySelector('.card').cloneNode(true);
item.querySelector('.card__image').style.backgroundImage = `url('${card.link}')`;
item.querySelector('.card__title').textContent = card.name;
cardList.append(item);
}
//идем по массиву и добавляем значения
initialCards.forEach(galleryAddItems);


//НЕ НРАВИТСЯ КАК НАПИСАНО
// выберем кнопки удаления(корзины) добавили в массив
const cardBasket = document.querySelectorAll('.card__basket');
// добавим обработчик на каждую кнопку
for (let i = 0; i < cardBasket.length; i++) {
  cardBasket[i].addEventListener('click', function (evt) {
  const listItem = evt.target.closest('.card');
  listItem.remove();
});
}
