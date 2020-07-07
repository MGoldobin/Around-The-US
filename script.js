const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function togglePopup() {
	popup.classList.toggle('popup_opened');
	popup.classList.toggle('popup_closed');

	inputName.value = profileName.textContent;
	inputAbout.value = profileAbout.textContent;
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	profileName.textContent = inputName.value;
	profileAbout.textContent = inputAbout.value;

	togglePopup();
	}
)