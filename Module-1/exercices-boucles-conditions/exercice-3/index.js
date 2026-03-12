let i = 0;

while (i <= 100) {

  // de 0 à 50 → un nombre sur 2
  if (i <= 50 && i % 2 === 0) {

    if (i % 2 === 0) {
      console.log(i + " : Pair");
    } else {
      console.log(i + " : Impair");
    }

  }

  // de 51 à 100 → un nombre sur 3
  if (i > 50 && i % 3 === 0) { /*si i est moins que 50 ET i et divisible par 3  cest bon sinon NON &&= TOUT VRAI ET*/

    if (i % 2 === 0) {
      console.log(i + " : Pair");
    } else {
      console.log(i + " : Impair");
    }

  }

  i = i + 1;
}