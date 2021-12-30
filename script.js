const display = document.getElementById("display");
let currentBrush = document.getElementsByClassName("selecionado")[0];
let gridSize = 16;
let currentColor = currentBrush.dataset.color;

display.style.cssText = "grid-template-columns: repeat(16, 1fr);";

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseenter", () => {
      pixel.style.background = currentColor;
    });
    display.appendChild(pixel);
  }
}
