export function calculate() {
  const result = document.getElementById("result");
  result.value = "ERRO";
  result.classList.add("error");
  const equal = eval(input.value);
  result.value = equal;
  result.classList.remove("error");
}
