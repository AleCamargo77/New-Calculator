import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipBoard.js";
import { themes } from "./themes.js";
import { charButtons, clearValues, deleteValue, keyPress } from "./keys.js";

const copy = document.getElementById("copyToClipboard");
const input = document.getElementById("input");
const result = document.getElementById("result");
const moon = document.getElementById("moon");
const light = document.getElementById("light");

moon.style.display = "none";
light.style.display = "block";

input.addEventListener("keydown", keyPress);
document.getElementById("delete").addEventListener("click", deleteValue);
document.getElementById("clear").addEventListener("click", clearValues);
document.getElementById("equal").addEventListener("click", calculate);
document.querySelectorAll(".charKey").forEach(function (char) {
  char.addEventListener("click", charButtons);
});
document.getElementById("theme").addEventListener("click", themes);
copy.addEventListener("click", copyToClipboard);
