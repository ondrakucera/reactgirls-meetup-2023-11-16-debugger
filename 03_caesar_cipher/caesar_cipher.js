const LOWER_CASE_A_CHAR_CODE = "a".charCodeAt(0);
const LOWER_CASE_Z_CHAR_CODE = "z".charCodeAt(0);
const UPPER_CASE_A_CHAR_CODE = "A".charCodeAt(0);
const UPPER_CASE_Z_CHAR_CODE = "Z".charCodeAt(0);
const A_TO_Z_COUNT = LOWER_CASE_Z_CHAR_CODE - LOWER_CASE_A_CHAR_CODE + 1;

function isCharacterRegularLowerCase(character) {
	const characterCode = character.charCodeAt(0);
	return characterCode >= LOWER_CASE_A_CHAR_CODE && characterCode <= LOWER_CASE_Z_CHAR_CODE;
}

function isCharacterRegularUpperCase(character) {
	const characterCode = character.charCodeAt(0);
	return characterCode >= UPPER_CASE_A_CHAR_CODE && characterCode <= UPPER_CASE_Z_CHAR_CODE;
}

function shiftLowerCaseCharacter(character, shift) {
	return String.fromCharCode(
		((character.charCodeAt(0) - LOWER_CASE_A_CHAR_CODE + shift) % A_TO_Z_COUNT) + LOWER_CASE_A_CHAR_CODE,
	);
}

function shiftUpperCaseCharacter(character, shift) {
	return String.fromCharCode(
		((character.charCodeAt(0) - UPPER_CASE_A_CHAR_CODE + shift) % A_TO_Z_COUNT) + UPPER_CASE_A_CHAR_CODE,
	);
}

function getForm() {
	return document.querySelector("form");
}

function getLowerCaseShift(form) {
	return Number(form.lower_case_shift.value);
}

function getUpperCaseShift(form) {
	return Number(form.upper_case_shift.value);
}

function getInputText(form) {
	return form.input_text.value;
}

function setOutputText(form, text) {
	form.output_text.value = text;
}

function encrypt(text, lowerCaseShift, upperCaseShift) {
	let result = "";
	for (const character of text) {
		if (isCharacterRegularLowerCase(character)) {
			result += shiftLowerCaseCharacter(character, lowerCaseShift);
		} else if (isCharacterRegularUpperCase(character)) {
			result += shiftUpperCaseCharacter(character, upperCaseShift);
		} else {
			result += character;
		}
	}
	return result;
}

function handleSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const lowerCaseShift = getLowerCaseShift(form);
	const upperCaseShift = getUpperCaseShift(form);
	const inputText = getInputText(form);
	const outputText = encrypt(inputText, lowerCaseShift, upperCaseShift);
	setOutputText(form, outputText);
}

function setupForm(form) {
	form.addEventListener("submit", handleSubmit);
}

function initialize() {
	const form = getForm();
	setupForm(form);
}

document.addEventListener("DOMContentLoaded", initialize);
