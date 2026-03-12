// nombre mystère
const secret = 67;

let guess = null;

while (guess !== secret) {
  // Demande un nombre à l'utilisateur
  const input = window.prompt("Devine le nombre (entre 0 et 100) :");

  // Si l'utilisateur clique sur Annuler
  if (input === null) {
    window.alert("Jeu arrêté.");
    break;
  }

  // Convertit le texte en nombre
  guess = parseInt(input, 10);

  // Si ce n'est pas un nombre
  if (Number.isNaN(guess)) {
    window.alert("Tu dois entrer un nombre !");
    continue;
  }

  if (guess < secret) {
    window.alert("C'est plus !");
  } else if (guess > secret) {
    window.alert("C'est moins !");
  } else {
    window.alert("Congrats! Tu as trouve le nombre 67 !");
  }
}