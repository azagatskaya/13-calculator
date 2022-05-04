"use strict";

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return (b === 0) ? "На 0 делить нельзя" : (a / b);
  }
}

document.querySelector(".result-btn").onclick = calc;
document.querySelector(".reset-btn").onclick = reset;

let operators = document.querySelectorAll(".operator");
operators.forEach((e) => {
  e.addEventListener("click", select);
});

function select() {
  resetSelected();
  this.classList.add("selected");
}

function reset() {
  resetSelected();
  resetValues();
}

function resetSelected() {
  let selectedBtns = document.querySelectorAll(".selected");
  selectedBtns.forEach((element) => {
    element.classList.remove("selected");
  });
}

function resetValues() {
  document.getElementById("operand--1").value = null;
  document.getElementById("operand--2").value = null;
  document.getElementById("result").innerText = null;
}

function calc() {
  let selectedBtn = document.getElementsByClassName("selected");
  let a = Number(document.getElementById("operand--1").value);
  let b = Number(document.getElementById("operand--2").value);
  let res;

  switch (selectedBtn[0].name) {
    case "add":
      res = Calculator.add(a, b);
      break;
    case "subtract":
      res = Calculator.subtract(a, b);
      break;
    case "multiply":
      res = Calculator.multiply(a, b);
      break;
    case "divide":
      res = Calculator.divide(a, b);
      break;
    default:
      alert("Ошибка...");
      break;
  }

  document.getElementById("result").innerText = res;
}