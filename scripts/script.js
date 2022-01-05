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