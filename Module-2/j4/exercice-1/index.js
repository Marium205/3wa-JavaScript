// 1) On récupère le paragraphe
const p = document.querySelector("#text");

// 2) On récupère le bouton
const btn = document.querySelector("button");

// 3) Quand on clique sur le bouton...
btn.addEventListener("click", () => {
  // ... on change la couleur du texte
  p.style.color = "red";
});