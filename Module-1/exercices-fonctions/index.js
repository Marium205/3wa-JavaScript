function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}
// Pour tester
console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0

function askUserOperation() {
  return prompt("Choisis une operation : + , - , * , / , %");
}

function askUserFirstNumber() {
  return Number(prompt("Choisis le premier nombre"));
}

function askUserSecondNumber() {
  return Number(prompt("Choisis le second nombre"));
}

function calculator() {
  const operation = askUserOperation();
  const firstNumber = askUserFirstNumber();
  const secondNumber = askUserSecondNumber();

  let result;

  if (operation === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operation === "-") {
    result = sub(firstNumber, secondNumber);
  } else if (operation === "*") {
    result = mult(firstNumber, secondNumber);
  } else if (operation === "/") {
    result = div(firstNumber, secondNumber);
  } else if (operation === "%") {
    result = mod(firstNumber, secondNumber);
  } else {
    alert("Operation invalide");
    return;
  }

  console.log("Resultat :", result);
}
calculator();