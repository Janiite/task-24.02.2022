let number1;
let number2;
let operator;
let result;
number1 = Number(prompt("Please select first number"));
number2 = Number(prompt("Please select second number"));
operator = prompt("Select the operation");

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  default:
    let message = "Wrong operation, please try again";
    alert(message);
}

document.getElementById("first").innerHTML = number1;
document.getElementById("second").innerHTML = number2;
document.getElementById("operator").innerHTML = operator;
document.getElementById("result").innerHTML = result;
