// 1) On récupère les éléments
const text = document.querySelector("#text");
const hideBtn = document.querySelector("#hide");
const showBtn = document.querySelector("#show");

// 2) Cacher le texte
hideBtn.addEventListener("click", () => {
  text.style.display = "none";
});

// 3) Afficher le texte
showBtn.addEventListener("click", () => {
  text.style.display = "block";
});