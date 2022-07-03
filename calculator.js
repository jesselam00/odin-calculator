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


function clickOperationButton() {
    if (currentNumber === "" && currentOperator === null) return
    if (firstNumber !== null && currentNumber === "" && currentOperator !== null) {
        inputOperation = inputOperation.slice(0,-3)
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
        inputOperation = inputOperation + ` ${currentOperator} `
        input.textContent = inputOperation
        
        return
    }
    else if (firstNumber !== null && currentNumber !== 0) {
        clickEqualsButton()
    }
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
    storeNumber()
    currentNumber = ""
    inputOperation = inputOperation + ` ${currentOperator} `
    input.textContent = inputOperation
}

function clickEqualsButton() {
    if (currentNumber === null) return
    else if (currentOperator === null) return
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
one.addEventListener("mousedown", clickNumberButton)
two.addEventListener("mousedown", clickNumberButton)
three.addEventListener("mousedown", clickNumberButton)
four.addEventListener("mousedown", clickNumberButton)
five.addEventListener("mousedown", clickNumberButton)
six.addEventListener("mousedown", clickNumberButton)
seven.addEventListener("mousedown", clickNumberButton)
eight.addEventListener("mousedown", clickNumberButton)
nine.addEventListener("mousedown", clickNumberButton)
zero.addEventListener("mousedown", clickNumberButton)

const addButton = document.querySelector("#addButton")
addButton.addEventListener("mousedown",clickOperationButton)
const subtractButton = document.querySelector("#subtractButton")
subtractButton.addEventListener("mousedown",clickOperationButton)
const divideButton = document.querySelector("#divideButton")
divideButton.addEventListener("mousedown",clickOperationButton)
const multiplyButton = document.querySelector("#multiplyButton")
multiplyButton.addEventListener("mousedown",clickOperationButton)

const equalsButton = document.querySelector("#equalsButton")
equalsButton.addEventListener("mousedown", clickEqualsButton)

const clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("mousedown", clickClearButton)
const deleteButton = document.querySelector("#deleteButton")
deleteButton.addEventListener("mousedown", clickDeleteButton)

const decimal = document.querySelector("#decimal")
decimal.addEventListener("mousedown", clickNumberButton)

function keyPressed(e) {
    const key = e.key
    switch (key) {
        case "Enter":
        case "=":
            clickEqualsButton()
            break
        case "Escape":
            clickClearButton()
            break
        case "Backspace":
            clickDeleteButton()
            break
        case "1":
            one.dispatchEvent("mousedown")
            break
    }
}

window.addEventListener('keydown', keyPressed);