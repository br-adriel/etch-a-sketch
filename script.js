const display = document.getElementById("display");
let currentBrush = document.getElementsByClassName("selecionado")[0];
let gridSize = 16;
let currentColor = currentBrush.dataset.color;

function novoDisplay(gridSize, color) {
  display.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;
  apagarDisplay();
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.addEventListener("mouseenter", () => {
        pixel.style.background = color;
      });
      display.appendChild(pixel);
    }
  }
}

function apagarDisplay() {
  while (display.lastChild) {
    display.removeChild(display.lastChild);
  }
}

novoDisplay(gridSize, currentColor);
