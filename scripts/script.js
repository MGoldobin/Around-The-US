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

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');

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

function createCard(item) {
  const cardTemplate = document.querySelector('#photo').content.querySelector('.photo__element');
  const cardElement = cardTemplate.cloneNode(true);
  
  const cardImage = cardElement.querySelector('.photo__image');
  const cardDeleteButton = cardElement.querySelector('.photo__delete-button');
  const cardName = cardElement.querySelector('.photo__name');
  const cardLikeButton = cardElement.querySelector('.photo__like-button');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardName.textContent = item.name;

  cardDeleteButton.addEventListener('click', () => {
    cardDeleteButton.closest('.photo__element').remove();
  })

  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('photo__like-button_clicked');
    cardLikeButton.classList.toggle('photo__like-button_unclicked');
  })

  cardImage.addEventListener('click', () => {
    togglePopup(showImageWindow);
    const image = showImageWindow.querySelector('img');
    const caption = showImageWindow.querySelector('figcaption');
    image.src = item.link;
    image.alt = item.name;
    caption.textContent = item.name;
  })

  return cardElement;
}

initialCards.forEach( (item) => {
  photoGrid.append(createCard(item));
})

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
  
  window.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      popup.classList.remove('popup_opened');
      popup.classList.add('popup_closed');
    }
  });

  window.addEventListener('click', function (evt) {
    if(evt.target.classList.contains('popup_opened')) {
      evt.target.classList.remove('popup_opened');
      evt.target.classList.add('popup_closed');
    }
  });
}