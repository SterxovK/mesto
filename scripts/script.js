let editButton = document.querySelector('.profile-intro__edit-button');
let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
const POPUP_CLASS = "popup_opened";
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__field_with_name');
let jobInput = document.querySelector('.popup__field_with_job');
let introName = document.querySelector('.profile-intro__title');
let introJob = document.querySelector('.profile-intro__sabtitle');

function EditProfile() {
    //console.log('Мы кликнули по edit');
    popupOpen.classList.remove(POPUP_CLASS);
}

function PopupClose(evt) {
    evt.preventDefault();
    //console.log('Мы кликнули по крестику');
    popupOpen.classList.add(POPUP_CLASS);
}

editButton.addEventListener('click', EditProfile);
popupClose.addEventListener('click', PopupClose);

function formSubmitHandler(evt) {
    evt.preventDefault(); 

    introName.textContent = nameInput.value;
    introJob.textContent = jobInput.value;
    PopupClose(evt);
}
formElement.addEventListener('submit', formSubmitHandler);

function enterSaveClose(evt) {
    if (evt.keyCode == 13) {
      formSubmitHandler(evt);
    }
    else if (evt.keyCode == 27) {
      PopupClose(evt)
    }
}
formElement.addEventListener('keydown', enterSaveClose);