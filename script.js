const display = document.getElementById("display");
const gridInput = document.getElementById("inputGrid");
const gridBtn = document.getElementById("submitGrid");
const colorInput = document.getElementById("inputColor");
const colorBtn = document.getElementById("submitColor");
const pinceis = document.getElementsByClassName("pinceis")[0];
const rainbow = [
  "#8e44ad",
  "#2980b9",
  "#16a085",
  "#27ae60",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
];
let rainbowIndex = -1;
let currentBrush = document.getElementsByClassName("selecionado")[0];
let gridSize = 16;
let currentColor = currentBrush.dataset.color;
let brushes = Array.from(document.getElementsByClassName("pincel"));

gridBtn.addEventListener("click", () => {
  gridSize = gridInput.value;
  novoDisplay(gridSize);
});

colorBtn.addEventListener("click", () => {
  let icone = document.createElement("i");
  icone.classList.add("fas");
  icone.classList.add("fa-paint-brush");

  let novoPincel = document.createElement("button");
  novoPincel.classList.add("pincel");
  novoPincel.setAttribute("data-color", colorInput.value);
  novoPincel.style.color = colorInput.value;
  addClickListener(novoPincel);
  novoPincel.appendChild(icone);
  pinceis.appendChild(novoPincel);
  brushes = Array.from(document.getElementsByClassName("pincel"));
});

function addClickListener(brush) {
  brush.addEventListener("click", () => {
    currentBrush = brush;
    currentColor = currentBrush.dataset.color;
    brushes.forEach((br) => {
      br.classList.remove("selecionado");
    });
    brush.classList.add("selecionado");
    currentBrush = document.getElementsByClassName("selecionado")[0];
  });
}

function getCurrentRainbow() {
  if (rainbowIndex === 6) {
    rainbowIndex = 0;
  } else {
    rainbowIndex++;
  }
  return rainbow[rainbowIndex];
}

function novoDisplay(gridSize) {
  display.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;
  apagarDisplay();
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.addEventListener("mouseenter", () => {
        if (currentBrush.classList.contains("arco-iris")) {
          currentColor = getCurrentRainbow();
        }
        pixel.style.background = currentColor;
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

function iniciar() {
  brushes.forEach((brush) => {
    addClickListener(brush);
  });
  novoDisplay(gridSize);
}

document.querySelector(
  "footer p"
).textContent = `Adriel Faria, ${new Date().getFullYear()}`;

iniciar();
