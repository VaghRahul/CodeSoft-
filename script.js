 let currentOperand = '';
let previousOperand = '';
let operator = '';

const display = document.getElementById('display');

function appendNumber(number) {
    currentOperand += number;
    display.value = currentOperand;
}

function setOperator(op) {
    if (currentOperand !== '') {
        if (previousOperand !== '') {
            calculate();
        }
        previousOperand = currentOperand;
        operator = op;
        currentOperand = '';
    }
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    display.value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (operator === '+') {
        result = prev + curr;
    } else if (operator === '-') {
        result = prev - curr;
    } else if (operator === '*') {
        result = prev * curr;
    } else if (operator === '/') {
        result = prev / curr;
    }
    currentOperand = result.toString();
    display.value = currentOperand;
    previousOperand = '';
    operator = '';
}

function appendDecimal(decimal) {
    if (!currentOperand.includes('.')) {
        currentOperand += decimal;
        display.value = currentOperand;
    }
}
