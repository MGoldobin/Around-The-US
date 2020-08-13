function showInputError(form, input, {inputErrorClass, errorClass, inputCorrectClass, ...rest}) {
	const error = document.querySelector(`#${input.id}-error`);
	error.textContent = input.validationMessage;
	error.classList.add(errorClass);
	input.classList.add(inputErrorClass);
	input.classList.remove(inputCorrectClass);
};

function hideErrorMessage(form, input, {inputErrorClass, errorClass, inputCorrectClass, ...rest}) {
	const error = document.querySelector(`#${input.id}-error`);
	error.textContent = '';
	error.classList.remove(errorClass);
	input.classList.remove(inputErrorClass);
	input.classList.add(inputCorrectClass);
};

function checkInputVadility(form, input, rest) {
	if(input.validity.valid) {
		hideErrorMessage(form, input, rest);
	} else {
		showInputError(form, input, rest);
	}
}

function toggleButtonState(button, inputs, {inactiveButtonClass, ...rest}) {
	const isValid = inputs.every((input) => input.validity.valid);
	if(isValid) {
		button.classList.remove(inactiveButtonClass);
		button.classList.add('opacity');
	} else {
		button.classList.add(inactiveButtonClass);
		button.classList.remove('opacity');
	}
}

function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
	const forms = [...document.querySelectorAll(formSelector)];

	forms.forEach((form) => {
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
	
		const inputs = [...form.querySelectorAll(inputSelector)];
		const button = form.querySelector(submitButtonSelector);

		inputs.forEach((input) => {
			input.addEventListener('input', () => {
				checkInputVadility(form, input, rest);
				toggleButtonState(button, inputs, rest);
			});
		});
	});
}


enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
	inputErrorClass: "popup__input_type_error",
	inputCorrectClass: "popup__input_type_correct",
  errorClass: "popup__error_visible"
});