const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return a / b
}

const modul = (a, b) => {
  return a % b
}

let firstNum = 5
let operator = ''
let secondNum = 5

const display = document.querySelector('.display')
const previousNumber = document.querySelector('.previousNumber')

const clearDisplay = () => {
  display.textContent = ''
}

const clearEverything = () => {
  clearDisplay()
  previousNumber.textContent = ''
}

const addNumber = (value) => {
  if (value == 0 && display.textContent == '') {
    console.log('Cant begin with 0')
  } else {
    display.textContent += value
  }
}

const backspace = () => {
  display.textContent = display.textContent.slice(0, -1)
}

const setAddOperator = () => {
  operator = '+'
  if (previousNumber.textContent != '') {
    previousNumber.textContent = operate()
  }
  previousNumber.textContent = display.textContent
  clearDisplay()
}
const setSubtractOperator = () => {
  operator = '-'
  if (previousNumber.textContent != '') {
    previousNumber.textContent = operate()
  }
  previousNumber.textContent = display.textContent
  clearDisplay()
}
const setDivideOperator = () => {
  operator = '/'
  if (previousNumber.textContent != '') {
    previousNumber.textContent = operate()
  }
  previousNumber.textContent = display.textContent
  clearDisplay()
}
const setMultiplyOperator = () => {
  operator = '*'
  if (previousNumber.textContent != '') {
    previousNumber.textContent = operate()
  }
  previousNumber.textContent = display.textContent
  clearDisplay()
}
const setModulOperator = () => {
  operator = '%'
  if (previousNumber.textContent != '') {
    previousNumber.textContent = operate()
  }
  previousNumber.textContent = display.textContent
  clearDisplay()
}

const operate = () => {
  firstNum = parseInt(previousNumber.textContent)
  secondNum = parseInt(display.textContent)
  clearDisplay()
  previousNumber.textContent = ''
  if (operator == '+') {
    display.textContent = add(firstNum, secondNum)
  } else if (operator == '-') {
    display.textContent = subtract(firstNum, secondNum)
  } else if (operator == '*') {
    display.textContent = multiply(firstNum, secondNum)
  } else if (operator == '/') {
    display.textContent = divide(firstNum, secondNum)
  } else if (operator == '%') {
    display.textContent = modul(firstNum, secondNum)
  } else {
    display.textContent = console.log('Invalid operator')
  }
}
