const editButton = document.querySelector('.profile__edit-profile-button');
const addButton = document.querySelector('.profile__add-card-button');

const formEdit = document.querySelector('.popup__form_type_edit-profile');
const formCreate = document.querySelector('.popup__form_type_create-place');

const inputName = formEdit.querySelector('.popup__input_type_name');
const inputAbout = formEdit.querySelector('.popup__input_type_about');
const inputTitle = formCreate.querySelector('.popup__input_type_title');
const inputLink = formCreate.querySelector('.popup__input_type_link');

const photoGrid = document.querySelector('.photo__grid');
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
	inputErrorClass: "popup__input_type_error",
	inputCorrectClass: "popup__input_type_correct",
  errorClass: "popup__error_visible"
};

export {editButton, addButton, formEdit, formCreate, inputName, inputAbout, inputTitle, inputLink, photoGrid, initialCards, settings};