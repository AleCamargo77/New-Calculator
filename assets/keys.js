import { calculate } from "./calculate.js";

const input = document.getElementById("input");

export function keyPress(ev) {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    " ",
  ];
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
  if (ev.key === "Enter") {
    calculate();
  }
  if (ev.key === "Backspace" || ev.key === "Delete") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Escape") {
    input.value = "";
    input.focus();
  }
}

export function deleteValue() {
  input.value = input.value.slice(0, -1);
}

export function clearValues() {
  input.value = "";
  input.focus();
  if ((result.value = "ERRO")) {
    result.classList.remove("error");
    result.value = "";
  }
}

export function charButtons(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}
