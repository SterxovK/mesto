import "./index.css";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  //initialCards,
  editBtn,
  //editForm,
  //addCardForm,
  nameInput,
  jobInput,
  addBtn,
  cardTemplate,
  cardListSelector,
  introNameSelector,
  introJobSelector,
  avatarSelector,
  popupTypeShowCardsSelector,
  addCardFormSelector,
  popupEditProfileSelector,
  popupWithRemoveComfirmSelector,
  popupEditAvatarSelector,
  editAvatarBtn,
} from "../utils/constants.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithRemoveComfirm from "../components/PopupWithRemoveComfirm.js";

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-38/",
  "13089023-6abb-436b-97fc-6020475b0841"
);

let tempCard;
let ownerId;

const userInfo = new UserInfo({
  introNameSelector,
  introJobSelector,
  avatarSelector,
});

api
  .getInitialData()
  .then((data) => {
    const [userData, cardsData] = data;
    //console.log(userData._id)
    ownerId = userData._id;
    userInfo.setUserInfo(userData);
    section.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  });

//Попап подтверждения удаления карточки
const popupWithRemoveComfirm = new PopupWithRemoveComfirm(
  popupWithRemoveComfirmSelector,
  {
    submit: (data) => {
      api
        .deleteCard(data)
        .then(() => {
          tempCard.removeElement();
        })
        .then(() => {
          tempCard = null;
          popupWithRemoveComfirm.close();
        })
        .catch((err) => {
          console.log(err);
        })
    },
  }
);

//попап редактирования аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, {
  callBackSubmitForm: (data) => {
    popupEditAvatar.loading(true);
    api
      .setUserAvatar(data)
      .then((res) => {
        console.log(res);
        userInfo.setUserAvatar(res);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.loading(false);  
      });
  },
});

const popupWithInfoForm = new PopupWithForm(popupEditProfileSelector, {
  callBackSubmitForm: (data) => {
    popupWithInfoForm.loading(true);
    api
      .setUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithInfoForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithInfoForm.loading(false);  
      });
  },
});

const photoPopup = new PopupWithImage(popupTypeShowCardsSelector);

//СОЗДАНИЕ КАРТОЧКИ
const createNewCard = (data) => {
  const card = new Card(data, cardTemplate, ownerId, {
    handleCardClick: (data) => {
      console.log(ownerId);
      photoPopup.open(data);
    },
    handleRemoveCard: () => {
      tempCard = card;
      popupWithRemoveComfirm.open(data);
    },
    handleLikeClick: () => {
      api
        .setLikes(data)
        .then((data) => { 
          card.setLikeCount(data);
          card.handleActiveHeart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleRemoveLike: () => {
      api
        .deleteLikes(data)
        .then((data) => {
          card.setLikeCount(data);
          card.handleActiveHeart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
   });
  return card;
};

const section = new Section(
  {
    renderer: (data) => {
      const card = createNewCard(data);
      const cardElement = card.generateCard();
      card.setLikeCount(data);
      section.addItem(cardElement);
    },
  },
  cardListSelector
);

const popupWithAddForm = new PopupWithForm(addCardFormSelector, {
  callBackSubmitForm: (data) => {
    popupWithAddForm.loading(true, "Сейчас случится магия...");
    api
      .setNewCards(data)
      .then((res) => {
        const card = createNewCard(res);
        const cardElement = card.generateCard();
        section.addItem(cardElement);
        popupWithAddForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithAddForm.loading(false);        
      });
  },
});

const formValidators = {};
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");
    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

editBtn.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupWithInfoForm.open();
  formValidators["editProfile"].resetValidation();
});

addBtn.addEventListener("click", () => {
  popupWithAddForm.open();
  formValidators["addCard"].resetValidation();
});

//открытие формы редактирования аватара
editAvatarBtn.addEventListener("click", () => {
  popupEditAvatar.open();
  formValidators["removeCard"].resetValidation();
});
