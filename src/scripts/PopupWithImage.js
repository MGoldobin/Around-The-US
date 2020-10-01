import Popup from './Popup.js';

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._imagePopup = this._popupElement.querySelector('.popup__image');
		this._captionPopup = this._popupElement.querySelector('figcaption');
	}

	open(data) {
		this._imagePopup.src = data.link;
		this._imagePopup.alt = data.link;
		this._captionPopup.textContent = data.name;
		super.open();
	}
}

export default PopupWithImage;