import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';
import {editButton, addButton, formEdit, formCreate, inputName, inputAbout, initialCards, settings} from '../utils/constants.js';

const editFormValidator = new FormValidator(settings, formEdit);
const addFormValidator = new FormValidator(settings, formCreate);
const showImageWindow = new PopupWithImage('.popup_type_show-image');
const createPlaceWindow = new PopupWithForm('.popup_type_create-place', createCard);
const editProfileWindow = new PopupWithForm('.popup_type_edit-profile', editProfile);
const userInfo = new UserInfo();
const cardGrid = new Section({
  items: initialCards,
  renderer: (item) => {
  createCard(item);
}
}, '.photo__grid');
editFormValidator.enableValidation();
addFormValidator.enableValidation();
showImageWindow.setEventListeners();
createPlaceWindow.setEventListeners();
editProfileWindow.setEventListeners();
cardGrid.renderItems();

function createCard(dataCard) {
  const card = new Card(
    {
      data: dataCard,
      handleCardClick: () => {
        showImageWindow.open(dataCard);
      }
    }, "#photo"
  );
  const cardElement = card.generateCard();
  cardGrid.addItem(cardElement);
}

function editProfile() {
  userInfo.setUserInfo(
    {
      unputProfileName: inputName.value, 
      unputProfileAbout: inputAbout.value
    }
  );
}

editButton.addEventListener('click', () => {
  editProfileWindow.open();
  const data = userInfo.getUserInfo();
  inputName.value = data.profileName;
	inputAbout.value = data.profileAbout;
})

addButton.addEventListener('click', () => {
  createPlaceWindow.open();
})