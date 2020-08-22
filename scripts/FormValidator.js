class FormValidator {
	constructor(settings, formElement) {
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._inputCorrectClass = settings.inputCorrectClass;
		this._errorClass = settings.errorClass;
		this._form = formElement;
	}

	_showInputError(inputElement) {
		const error = this._form.querySelector(`#${inputElement.id}-error`);
		error.textContent = inputElement.validationMessage;
		error.classList.add(this._errorClass);
		inputElement.classList.add(this._inputErrorClass);
		inputElement.classList.remove(this._inputCorrectClass);
	};

	_hideErrorMessage(inputElement) {
		const error = this._form.querySelector(`#${inputElement.id}-error`);
		error.textContent = '';
		error.classList.remove(this._errorClass);
		inputElement.classList.remove(this._inputErrorClass);
		inputElement.classList.add(this._inputCorrectClass);
	};
	
	_checkInputVadility(inputElement) {
		if(inputElement.validity.valid) {
			hideErrorMessage(inputElement);
		} else {
			showInputError(inputElement);
		}
	}
	
	_toggleButtonState(button, inputs) {
		const isValid = inputs.every((input) => input.validity.valid);
		if(isValid) {
			button.classList.remove(this._inactiveButtonClass);
			button.classList.add('opacity');
		} else {
			button.classList.add(this._inactiveButtonClass);
			button.classList.remove('opacity');
		}
	}
	
	_setEventListeners() {
		const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
		const button = this._form.querySelector(this._inactiveButtonClasssubmitButtonSelector);
	
		inputs.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputVadility(inputs);
				this._toggleButtonState(button, inputs);
			});
		});
	} 

	enableValidation() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		
		this._setEventListeners();
	}
}

export default FormValidator;