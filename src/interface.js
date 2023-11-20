function createDiv(className, text = "") {
  const div = document.createElement("div");
  div.classList.add(className);
  if (text) {
    div.textContent = text;
  }
  return div;
}

export default function ScreenController() {}
