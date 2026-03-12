const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const colsInput = document.getElementById("colsInput");
const rowsInput = document.getElementById("rowsInput");
const genBtn = document.getElementById("genBtn");

const shapeSelect = document.getElementById("shapeSelect");
const sizeInput = document.getElementById("sizeInput");

const saveBtn = document.getElementById("saveBtn");

let cols = 30;
let rows = 20;

// BONUS 3 : Générer la grille à la taille voulue
function createGrid() {
  grid.innerHTML = "";

  grid.style.gridTemplateColumns = "repeat(" + cols + ", 32px)";
  grid.style.gridTemplateRows = "repeat(" + rows + ", 32px)";
  grid.style.width = (cols * 32) + "px";
  grid.style.height = (rows * 32) + "px";

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
}

genBtn.addEventListener("click", function () {
  cols = Number(colsInput.value);
  rows = Number(rowsInput.value);

  if (cols < 1) cols = 1;
  if (rows < 1) rows = 1;

  createGrid();
});

// BONUS 4 : Dessiner des formes
grid.addEventListener("click", function (event) {
  // BONUS 1 : si on clique une forme déjà posée => on la supprime
  if (event.target.classList.contains("shape")) {
    event.target.remove();
    return;
  }

  const shape = document.createElement("div");
  shape.className = "shape";

  const color = colorPicker.value;
  const type = shapeSelect.value;

  const width = Number(sizeInput.value) * 20;
  const height = Number(sizeInput.value) * 20;

  // position dans la grille
  shape.style.left = event.offsetX + "px";
  shape.style.top = event.offsetY + "px";

  // le switch que tu voulais
  switch (type) {
    case "square":
      shape.style.width = width + "px";
      shape.style.height = width + "px";
      shape.style.backgroundColor = color;
      break;

    case "rectangle":
      shape.style.width = width + "px";
      shape.style.height = height + "px";
      shape.style.backgroundColor = color;
      break;

    case "circle":
      shape.style.width = width + "px";
      shape.style.height = width + "px";
      shape.style.backgroundColor = color;
      shape.classList.add("circle");
      break;

    case "triangle":
      shape.style.borderLeft = width / 2 + "px solid transparent";
      shape.style.borderRi ght = width / 2 + "px solid transparent";
      shape.style.borderBottom = height + "px solid " + color;
      shape.classList.add("triangle");
      break;
  }

  grid.appendChild(shape);
});

// BONUS 2 : Sauvegarder en PNG
saveBtn.addEventListener("click", function () {
  html2canvas(grid).then(function (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "dessin.png";
    link.click();
  });
});

// Démarrage
createGrid();qqqqq>