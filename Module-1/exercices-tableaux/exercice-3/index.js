let numbers = [10, 11, 15, 6]; //la liste des nombres

let sum = 0; // faut rajouter 0 sinon on peut pas additioner
for (let number of numbers) { // la c'est la boucle for of comme ta fais avant RAPPEL pour chaque nombre dans le tableau numbers (number 10 11 15 6)
    sum = sum + number; //la tu fais additions dcp sum + number 0 + 10 , 10+ 11 etc..
}
console.log(sum); // et la sa s'affiche le sum total 42 dans le console