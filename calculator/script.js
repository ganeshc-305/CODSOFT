let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let currentInput = '';
let darkMode = false;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(currentInput).toString();
        display.value = result;
        addToHistory(currentInput + ' = ' + result);
        currentInput = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function addToHistory(entry) {
    let listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

function toggleMode() {
    const calculator = document.getElementById('calculator');
    const modeToggle = document.getElementById('modeToggle');
    const modeText = document.getElementById('modeText');

    darkMode = !darkMode;
    calculator.classList.toggle('button-dark', darkMode);
    document.body.style.backgroundColor = darkMode ? '#2c3e50' : '#f8f8f8';
    calculator.style.backgroundColor = darkMode ? '#34495e' : '#fff';
    modeText.textContent = darkMode ? 'Dark Mode' : 'Light Mode';

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.classList.toggle('button-dark', darkMode);
    });

    const historyEntries = document.querySelectorAll('#historyList li');
    historyEntries.forEach(entry => {
        entry.style.backgroundColor = darkMode ? '#2c3e50' : '#fff';
        entry.style.color = darkMode ? '#fff' : '#333';
    });
}
