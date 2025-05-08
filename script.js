let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstNumber = null;

function appendNumber(num) {
    currentInput += num;
    display.innerText = currentInput;
}

function setOperator(op) {
    if (currentInput !== "") {
        firstNumber = parseFloat(currentInput);
        operator = op;
        currentInput = "";
        display.innerText = operator;
    }
}

function calculate() {
    if (firstNumber !== null && currentInput !== "") {
        let secondNumber = parseFloat(currentInput);
        let result;
                
    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = secondNumber !== 0 ? firstNumber / secondNumber : "تقسیم بر صفر مجاز نیست!"; break;
}
    display.innerText = result;
        currentInput = "";
        operator = "";
        firstNumber = null;
    }
}

function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    operator = "";
    firstNumber = null;
}