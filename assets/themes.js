export function themes() {
  const moon = document.getElementById("moon");
  const light = document.getElementById("light");
  const main = document.querySelector("main");
  const root = document.querySelector(":root");

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
}
