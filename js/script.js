"use strict";

function select(sender) {
  resetSelected();
  sender.classList.add("selected");
}

function reset() {
  resetSelected();
  resetValues();
}

function resetSelected() {
  let selectedBtns = document.querySelectorAll(".selected");
   selectedBtns.forEach(element => {
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
      res = a + b;
      break;
    case "subtract":
      res = a - b;
      break;
    case "multiply":
      res = a * b;
      break;
    case "divide":
      (b === 0) ? res = "На 0 делить нельзя" : res = a / b;
      break;
    default:
      alert("Ошибка...");
      break;
  }

  document.getElementById("result").innerText = res;
}
