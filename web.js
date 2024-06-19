document.addEventListener('DOMContentLoaded', (event) => {
    let display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function clearDisplay() {
        currentInput = '';
        operator = '';
        previousInput = '';
        display.textContent = '0';
    }

    function deleteDigit() {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') {
            display.textContent = '0';
        } else {
            display.textContent = currentInput;
        }
    }

    function appendNumber(number) {
        if (currentInput.includes('.') && number === '.') return;
        currentInput += number;
        display.textContent = currentInput;
    }

    function appendOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculateResult() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result;
        operator = '';
        previousInput = '';
        display.textContent = result;
    }

    window.clearDisplay = clearDisplay;
    window.deleteDigit = deleteDigit;
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.calculateResult = calculateResult;
});
