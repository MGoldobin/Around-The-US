import Popup from './Popup.js';

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._imagePopup = this._popupElement.querySelector('.popup__image');
		this._captionPopup = this._popupElement.querySelector('figcaption');
	}

	open(data) {
		this._imagePopup.src = data.link || data.cardUrl;
		this._imagePopup.alt = data.link || data.cardTitle;
		this._captionPopup.textContent = data.name || data.cardTitle;
		super.open();
	}
}

export default PopupWithImage;