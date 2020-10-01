class Card {
	constructor({data, handleCardClick}, templateSelector) {
		this._name =data.name ||  data.cardTitle;
		this._link = data.link || data.cardUrl;
		this._handleCardClick = handleCardClick;
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

		function _removeElement() {
			cardDeleteButton.closest('.photo__element').remove();
		};

		function _clickLikeButton() {
			cardLikeButton.classList.toggle('photo__like-button_clicked');
		};

		cardDeleteButton.addEventListener('click', _removeElement);
		cardLikeButton.addEventListener('click', _clickLikeButton);
		cardImage.addEventListener('click', this._handleCardClick)
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