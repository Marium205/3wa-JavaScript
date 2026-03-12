const text = document.getElementById("text");
const color = document.getElementById("color");
const preview = document.getElementById("preview");

text.addEventListener("input", function () {
    preview.textContent = text.value;
});

color.addEventListener("change", function () {
    preview.style.backgroundColor = color.value;
});