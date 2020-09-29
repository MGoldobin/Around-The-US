import Popup from './Popup.js';

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
	}

	open(data) {
		this._popupElement.querySelector('.popup__image').src = data.link;
		this._popupElement.querySelector('.popup__image').alt = data.link;
		this._popupElement.querySelector('figcaption').textContent = data.name;
		super.open();
	}
}

export default PopupWithImage;