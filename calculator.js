function add(a,b) {
    return a+b
}
function subtract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}
function operate(operator,a,b) {
    a = +a
    b = +b
    if (operator === "+") {
        return add(a,b)
    }
    else if (operator === "-") {
        return subtract(a,b)
    }
    else if (operator === "*") {
        return multiply(a,b)
    }
    else if (operator === "/") {
        return divide(a,b)
    }
}

function resetState() {
    currentNumber = ""
    firstNumber = null
    secondNumber = null
    currentOperator = null
}

function resetInputOperation() {
    inputOperation = ""
}

function storeNumber() {
    firstNumber !== null ? secondNumber = currentNumber : firstNumber = currentNumber
    inputOperation += Number(currentNumber).toString()
}

function clickNumberButton() {
    if (currentNumber.length >= 7) return
    let number = this.id
    switch(number) {
        case "one":
            number = "1"
            break
        case "two":
            number = "2"
            break
        case "three":
            number = "3"
            break
        case "four":
            number = "4"
            break
        case "five":
            number = "5"
            break
        case "six":
            number = "6"
            break
        case "seven":
            number = "7"
            break
        case "eight":
            number = "8"
            break
        case "nine":
            number = "9"
            break
        case "zero":
            number = "0"
            break
        case "decimal":
            number = "."
            break
    }
    currentNumber += number
    input.textContent = inputOperation + currentNumber
}

function addOperatorToInput(operator) {
    inputOperation = inputOperation + ` ${currentOperator} `
}

function replaceOperatorInInput(operator) {
    inputOperation = inputOperation.slice(0,-3)
    inputOperation = inputOperation + ` ${currentOperator} `
}

function clickOperationButton() {
    storeNumber()
    currentNumber = ""
    const duplicateOperator = currentOperator
    const operatorID = this.id
    switch (operatorID) {
        case "addButton":
            currentOperator = "+"
            break
        case "subtractButton":
            currentOperator = "-"
            break
        case "multiplyButton":
            currentOperator = "*"
            break
        case "divideButton":
            currentOperator = "/"
            break
    }
    if (currentOperator === duplicateOperator) return
    else if (duplicateOperator !== null) {
        replaceOperatorInInput()
        input.textContent = inputOperation
    }
    else {
        addOperatorToInput()
        input.textContent = inputOperation
    }
}

function clickEqualsButton() {
    storeNumber()
    if (secondNumber == 0 && currentOperator == "/") {
        input.textContent = "Divide by zero"
        output.textContent = inputOperation + " ="
        resetState()
        resetInputOperation()
    }
    else{
        const finalNumber = operate(currentOperator,firstNumber,secondNumber)
        input.textContent = Number(finalNumber.toFixed(7))
        output.textContent = inputOperation + " ="
        resetState()
        resetInputOperation()
        currentNumber = Number(finalNumber.toFixed(7)).toString()
        inputOperation = ""
    }
}

function clickClearButton() {
    resetState()
    resetInputOperation()
    input.textContent = ""
    output.textContent = ""
}

function clickDeleteButton() {
    currentNumber = currentNumber.slice(0,-1)
    currentNumber == "" ? clickClearButton() : input.textContent = inputOperation + currentNumber
    
}

let currentNumber = ""
let inputOperation = ""
let firstNumber = null
let secondNumber = null
let currentOperator = null
const input = document.querySelector(".input")
const output = document.querySelector(".output")

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")
one.addEventListener("click", clickNumberButton)
two.addEventListener("click", clickNumberButton)
three.addEventListener("click", clickNumberButton)
four.addEventListener("click", clickNumberButton)
five.addEventListener("click", clickNumberButton)
six.addEventListener("click", clickNumberButton)
seven.addEventListener("click", clickNumberButton)
eight.addEventListener("click", clickNumberButton)
nine.addEventListener("click", clickNumberButton)
zero.addEventListener("click", clickNumberButton)

const addButton = document.querySelector("#addButton")
addButton.addEventListener("click",clickOperationButton)
const subtractButton = document.querySelector("#subtractButton")
subtractButton.addEventListener("click",clickOperationButton)
const divideButton = document.querySelector("#divideButton")
divideButton.addEventListener("click",clickOperationButton)
const multiplyButton = document.querySelector("#multiplyButton")
multiplyButton.addEventListener("click",clickOperationButton)

const equalsButton = document.querySelector("#equalsButton")
equalsButton.addEventListener("click", clickEqualsButton)

const clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("click", clickClearButton)
const deleteButton = document.querySelector("#deleteButton")
deleteButton.addEventListener("click", clickDeleteButton)

const decimal = document.querySelector("#decimal")
decimal.addEventListener("click", clickNumberButton)