export function fillArticle(articleId, userData) {
  let article = document.getElementById("articleId");
  article.innerHTML = `<h2>${userData.fiata.lastName}</h2>`;
}