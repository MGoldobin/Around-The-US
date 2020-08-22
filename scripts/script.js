import FormValidator from './FormValidator.js';
import Card from './Card.js';

const editProfileWindow = document.querySelector('.popup_type_edit-profile');
const createPlaceWindow = document.querySelector('.popup_type_create-place');
const showImageWindow = document.querySelector('.popup_type_show-image');

const editButton = document.querySelector('.profile__edit-profile-button');
const addButton = document.querySelector('.profile__add-card-button');
const closeEditProfileButton = editProfileWindow.querySelector('.popup__close-button');
const closeCreatePlaceButton = createPlaceWindow.querySelector('.popup__close-button');
const closeShowImageButton = showImageWindow.querySelector('.popup__close-button');

const formEdit = document.querySelector('.popup__form_type_edit-profile');
const formCreate = document.querySelector('.popup__form_type_create-place');

const inputName = formEdit.querySelector('.popup__input_type_name');
const inputAbout = formEdit.querySelector('.popup__input_type_about');
const inputTitle = formCreate.querySelector('.popup__input_type_title');
const inputLink = formCreate.querySelector('.popup__input_type_link');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

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

const editFormValidator = new FormValidator(settings, formEdit);
const addFormValidator = new FormValidator(settings, formCreate);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

initialCards.forEach( (item) => {
  let card = new Card(item, '#photo');
  photoGrid.append(card.generateCard());
});

formEdit.addEventListener('submit', (e) => {
  e.preventDefault();
	profileName.textContent = inputName.value;
	profileAbout.textContent = inputAbout.value;
	togglePopup(editProfileWindow);
})

formCreate.addEventListener('submit', (e) => {
  e.preventDefault();
  const dataCard = {
      name: inputTitle.value, 
      link: inputLink.value
    }
    photoGrid.append(createCard(dataCard));
  togglePopup(createPlaceWindow);
  formCreate.reset();
})

editButton.addEventListener('click', () => {
  togglePopup(editProfileWindow);
  inputName.value = profileName.textContent;
	inputAbout.value = profileAbout.textContent;
})

addButton.addEventListener('click', () => {
  togglePopup(createPlaceWindow);
})

closeEditProfileButton.addEventListener('click', () => {
  togglePopup(editProfileWindow);
})

closeCreatePlaceButton.addEventListener('click', () => {
  togglePopup(createPlaceWindow);
})

closeShowImageButton.addEventListener('click', () => {
  togglePopup(showImageWindow);
})

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
  popup.classList.toggle('popup_closed');

  const escClose = (evt) => {
    if(evt.key === 'Escape'){
      popup.classList.remove('popup_opened');
      popup.classList.add('popup_closed');
    }
  }

  const clickClose = (evt) => {
    if(evt.target === popup){
      popup.classList.remove('popup_opened');
      popup.classList.add('popup_closed');
    }
  }

  if(popup.classList.contains('popup_opened')) {
    document.addEventListener('keydown', escClose);
    document.addEventListener('click', clickClose);
  } else {
    document.removeEventListener('keydown', escClose);
    document.removeEventListener('click', clickClose);
  }
}