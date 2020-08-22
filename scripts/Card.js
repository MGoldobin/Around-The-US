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

class Card {
	constructor(data, templateSelector) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
	}

	_getTemplate() { 
			const cardElement = document
			.querySelector(this._templateSelector)
			.content
			.querySelector('.photo__element')
			.cloneNode(true);

			return cardElement;
	}

	_setEventListeners() {
    const cardLikeButton = this._card.querySelector('.photo__like-button');
		const cardDeleteButton = this._card.querySelector('.photo__delete-button');    
		const cardImage = this._card.querySelector('.photo__image');

		
		cardDeleteButton.addEventListener('click', () => {
			cardDeleteButton.closest('.photo__element').remove();
		})
	
		cardLikeButton.addEventListener('click', () => {
			cardLikeButton.classList.toggle('photo__like-button_clicked');
			cardLikeButton.classList.toggle('photo__like-button_unclicked');
		})
	
		cardImage.addEventListener('click', () => {
			const showImageWindow = document.querySelector('.popup_type_show-image');
			togglePopup(showImageWindow);
			const image = showImageWindow.querySelector('img');
			const caption = showImageWindow.querySelector('figcaption');
			image.src = this._link;
			image.alt = this._name;
			caption.textContent = this._name;
		})
	}

	generateCard() {
    this._card = this._getTemplate().cloneNode(true);
    
    const cardImage = this._card.querySelector('.photo__image');
    const cardName = this._card.querySelector('.photo__name');

		cardImage.src = this._link;
		cardImage.alt = this._name;
		cardName.textContent = this._name;
		
		this._setEventListeners();

		return this._card;
	}
}

export default Card;