export function copyToClipboard(ev) {
  const copy = document.getElementById("copyToClipboard");
  const result = document.getElementById("result");
  if (copy.innerText === "Cópia") {
    copy.innerText = "Copiado";
    copy.classList.add("success");
    navigator.clipboard.writeText(result.value);
  } else {
    copy.innerText = "Cópia";
    copy.classList.remove("success");
  }
}
