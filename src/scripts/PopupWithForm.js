import Popup from './Popup.js';

class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._formElement = this._popupElement.querySelector(".popup__form");
		this._inputs = this._formElement.querySelectorAll(".popup__input");
	}

	_getInputValues() {
		this._inputValues = {};
    this._inputs.forEach( (input) => {
      this._inputValues[input.id] = input.value
    });
    return this._inputValues;
	}

	setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    })
    super.setEventListeners();
  }
  
  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;