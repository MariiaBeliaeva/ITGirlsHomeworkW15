let n1;
let n2;

let result = document.getElementById("result");

function add() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;

  result.innerHTML = +n1 + +n2;
}

function subtract() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;

  result.innerHTML = +n1 - +n2;
}

function multiply() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;

  result.innerHTML = +n1 * +n2;
}

function divide() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;

  if (n2 == 0) {
    let result = "На ноль делить нельзя!";
    document.getElementById("result").innerHTML = result;
  } else {
    let result = +n1 / +n2;
    document.getElementById("result").innerHTML = result;
  }
}
