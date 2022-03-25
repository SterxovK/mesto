(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._cardTemplate=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._cardTemplate.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardTitle=this._element.querySelector(".card__title"),this._cardImage=this._element.querySelector(".card__image"),this._cardHeart=this._element.querySelector(".card__heart"),this._cardBasket=this._element.querySelector(".card__basket"),this._setEventListeners(),this._cardImage.style.backgroundImage="url('".concat(this._data.link,"')"),this._cardTitle.textContent=this._data.name,this._element}},{key:"_handleRemoveNewCardClick",value:function(){this._element.remove(),this._element=null}},{key:"_handleActiveHeart",value:function(){this._cardHeart.classList.toggle("card__heart_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardBasket.addEventListener("click",(function(){e._handleRemoveNewCardClick()})),this._cardHeart.addEventListener("click",(function(){e._handleActiveHeart()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._settings.inputErrorClass,o=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(n),o.textContent=t})),i(this,"_hideInputError",(function(e){var t=r._settings.inputErrorClass,n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(t),n.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"disableSabmitButton",(function(){var e=r._settings.inactiveButtonClass;r._submitButton.classList.add(e),r._submitButton.disabled=!0})),i(this,"_enableButtonstate",(function(){var e=r._settings.inactiveButtonClass;r._submitButton.classList.remove(e),r._submitButton.disabled=!1})),this._form=n,this._settings=t;var o=this._settings,a=o.inputSelector,c=o.submitButtonSelector;this._inputList=Array.from(this._form.querySelectorAll(a)),this._submitButton=this._form.querySelector(c)}var t,n;return t=e,(n=[{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSabmitButton():this._enableButtonstate()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=document.querySelector(".profile-intro__edit-button"),u=(document.querySelector(".popup_type_edit-profile"),document.querySelector(".popup_type_add-cards"),document.querySelector(".popup__field_with_name")),l=document.querySelector(".popup__field_with_job"),s=document.querySelector(".profile__add-button"),p=document.querySelector("#template-card").content;function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._handleClickClose=this._handleClickClose.bind(this),this._handleKeydownClose=this._handleKeydownClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"_handleKeydownClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popupElement.addEventListener("click",this._handleClickClose),document.addEventListener("keydown",this._handleKeydownClose)}},{key:"_removeEventListener",value:function(){this._popupElement.removeEventListener("click",this._handleClickClose),document.removeEventListener("keydown",this._handleKeydownClose)}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._removeEventListener()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup__image"),t._imageCaption=t._popupElement.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){y(g(a.prototype),"open",this).call(this),this._image.src=e.link,this._image.alt="Изображение ".concat(e.name),this._imageCaption.textContent=e.name}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function O(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n,r=t.callBackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callBackSubmitForm=r,n._form=n._popupElement.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__field")),n._handlerSubmitEvt=n._hendlerSubmitEvt.bind(L(n)),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_hendlerSubmitEvt",value:function(e){e.preventDefault(),this._callBackSubmitForm(this._getInputValues())}},{key:"setEventListeners",value:function(){E(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handlerSubmitEvt)}},{key:"close",value:function(){E(P(a.prototype),"close",this).call(this),this._form.reset(),this._form.removeEventListener("submit",this._handlerSubmitEvt)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.introNameSelector,r=t.introJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._introNameSelector=n,this._introJobSelector=r,this._name=document.querySelector(this._introNameSelector),this._job=document.querySelector(this._introJobSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.job}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();fetch("https://mesto.nomoreparties.co/v1/cohort-38/cards",{headers:{authorization:"13089023-6abb-436b-97fc-6020475b0841"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}));var R=new k(".popup_type_show-cards"),x=function(e){var t=new r(e,p,{handleCardClick:function(e){R.open(e)}});return t},T=new t({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=x(e).generateCard();T.addItem(t)}},".cards__list");T.renderItems();var A,V=new B(".popup_type_add-cards",{callBackSubmitForm:function(e){var t=x(e).generateCard();T.addItem(t),V.close()}}),N=new q({introNameSelector:".profile-intro__title",introJobSelector:".profile-intro__sabtitle"}),D=new B(".popup_type_edit-profile",{callBackSubmitForm:function(e){N.setUserInfo(e),D.close()}}),F={};A={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__field_type_error"},Array.from(document.querySelectorAll(A.formSelector)).forEach((function(e){var t=new a(A,e),n=e.getAttribute("name");F[n]=t,t.enableValidation()})),c.addEventListener("click",(function(){var e=N.getUserInfo();u.value=e.name,l.value=e.job,D.open(),F.editProfile.resetValidation()})),s.addEventListener("click",(function(){V.open(),F.addCard.resetValidation()}))})();