// On récupère le span du titre
const span = document.querySelector("h2 span");

// On récupère la section des détails
const section = document.querySelector("section");

// Au départ : on cache le texte
section.style.display = "none";
span.textContent = "+";

span.addEventListener("click", () => {
  if (section.style.display === "none") {
    // Afficher
    section.style.display = "block";
    span.textContent = "-";
  } else {
    // Masquer
    section.style.display = "none";
    span.textContent = "+";
  }
});