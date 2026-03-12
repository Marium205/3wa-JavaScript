window.addEventListener("DOMContentLoaded", function () {
  let username = sessionStorage.getItem("username");

  if (username) {
    username = window.prompt("Entrez votre nom :");
    sessionStorage.setItem("username", username);
  } else {
    window.alert("Votre nom est : " + username);
  }
});