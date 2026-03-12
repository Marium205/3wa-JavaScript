// 1) On récupère les contenus
const tab1Content = document.querySelector("#tab-1-content");
const tab2Content = document.querySelector("#tab-2-content");
const tab3Content = document.querySelector("#tab-3-content");

// 2) On récupère les boutons
const tab1Btn = document.querySelector("#tab-1");
const tab2Btn = document.querySelector("#tab-2");
const tab3Btn = document.querySelector("#tab-3");

// 3) Fonction pour tout cacher
function hideAll() {
  tab1Content.style.display = "none";
  tab2Content.style.display = "none";
  tab3Content.style.display = "none";
}

// 4) Onglet 1
tab1Btn.addEventListener("click", () => {
  hideAll();
  tab1Content.style.display = "block";
});

// 5) Onglet 2
tab2Btn.addEventListener("click", () => {
  hideAll();
  tab2Content.style.display = "block";
});

// 6) Onglet 3
tab3Btn.addEventListener("click", () => {
  hideAll();
  tab3Content.style.display = "block";
});