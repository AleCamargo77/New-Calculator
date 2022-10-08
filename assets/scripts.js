import { calculate } from "./calculate.js";

const input = document.getElementById("input");
const result = document.getElementById("result");
const main = document.querySelector("main");
const root = document.querySelector(":root");
const moon = document.getElementById("moon");
const light = document.getElementById("light");
const copy = document.getElementById("copyToClipboard");
moon.style.display = "none";
light.style.display = "block";

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
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
});

document.getElementById("delete").addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  if ((result.value = "ERRO")) {
    result.classList.remove("error");
    result.value = "";
  }
});

document.getElementById("equal").addEventListener("click", calculate);

document.querySelectorAll(".charKey").forEach(function (char) {
  char.addEventListener("click", function () {
    const value = char.dataset.value;
    input.value += value;
  });
});

document.getElementById("theme").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--font-color", "#000");
    root.style.setProperty("--primary-color", "#855b0e");
    moon.style.display = "block";
    light.style.display = "none";
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#333");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--primary-color", "#fbab18");
    moon.style.display = "none";
    light.style.display = "block";
    main.dataset.theme = "dark";
  }
});

copy.addEventListener("click", function (ev) {
  if (copy.innerText === "Cópia") {
    copy.innerText = "Copiado";
    copy.classList.add("success");
    navigator.clipboard.writeText(result.value);
  } else {
    copy.innerText = "Cópia";
    copy.classList.remove("success");
  }
});
