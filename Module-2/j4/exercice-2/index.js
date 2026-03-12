// 1) On récupère le paragraphe
const p = document.querySelector("#text");

// 2) On récupère le bouton
const btn = document.querySelector("button");

// 3) Au clic sur le bouton
btn.addEventListener("click", () => {
  // 4) On ajoute OU enlève la classe "red"
  p.classList.toggle("red");
});