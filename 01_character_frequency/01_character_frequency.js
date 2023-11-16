const LOWER_CASE_A_CHAR_CODE = "a".charCodeAt(0);
const LOWER_CASE_Z_CHAR_CODE = "z".charCodeAt(0);
const UPPER_CASE_A_CHAR_CODE = "A".charCodeAt(0);
const UPPER_CASE_Z_CHAR_CODE = "Z".charCodeAt(0);
const LOWER_CASE_UPPER_CASE_CHAR_CODE_DIFFERENCE = LOWER_CASE_A_CHAR_CODE - UPPER_CASE_A_CHAR_CODE;

function isCharacterRegularLowerCase(character) {
	const characterCode = character.charCodeAt(0);
	return characterCode >= LOWER_CASE_A_CHAR_CODE && characterCode <= LOWER_CASE_Z_CHAR_CODE;
}

function isCharacterRegularUpperCase(character) {
	const characterCode = character.charCodeAt(0);
	return characterCode >= UPPER_CASE_A_CHAR_CODE && characterCode <= UPPER_CASE_Z_CHAR_CODE;
}

function isCharacterRegular(character) {
	return isCharacterRegularLowerCase(character) || isCharacterRegularUpperCase(character);
}

function increaseCharacterFrequency(frequency, character) {
	if (!(character in frequency)) {
		frequency[character] = 0;
	}
	frequency[character]++;
}

function calculateFrequencyOfString(frequency, string) {
	for (const character of string) {
		if (isCharacterRegular(character)) {
			let lowerCaseCharacter = character;
			if (isCharacterRegularUpperCase(character)) {
				lowerCaseCharacter = String.fromCharCode(character.charCodeAt(0) + LOWER_CASE_UPPER_CASE_CHAR_CODE_DIFFERENCE);
			}
			increaseCharacterFrequency(frequency, lowerCaseCharacter);
		}
	}
}

function calculateFrequencyOfStringList(stringList) {
	const frequency = {};
	for (const string of stringList) {
		calculateFrequencyOfString(frequency, string);
	}
	return frequency;
}

function printFrequency(frequency) {
	for (let characterCode = LOWER_CASE_A_CHAR_CODE; characterCode <= LOWER_CASE_Z_CHAR_CODE; characterCode++) {
		const character = String.fromCharCode(characterCode);
		console.log(`${character}: ${character in frequency ? frequency[character] : 0}`);
	}
}

const stringList = [
	"Two households, both alike in dignity,",
	"In fair Verona, where we lay our scene,",
	"From ancient grudge break to new mutiny,",
	"Where civil blood makes civil hands unclean.",
];

const frequency = calculateFrequencyOfStringList(stringList);
printFrequency(frequency);
