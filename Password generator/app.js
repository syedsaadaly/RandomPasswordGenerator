const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=<>?';

generateButton.addEventListener('click', () => {
    const length = +lengthInput.value;
    const includeUppercase = uppercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSymbols = symbolsInput.checked;

    passwordDisplay.innerText = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
});

function generatePassword(length, uppercase, numbers, symbols) {
    let chars = lowercaseLetters;
    if (uppercase) chars += uppercaseLetters;
    if (numbers) chars += numbers;
    if (symbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
