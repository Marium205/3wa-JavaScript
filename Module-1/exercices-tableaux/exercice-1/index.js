let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];  //Afficher tous les éléments du tableau animals avec la syntaxe simple
for (let i = 0; i < animals.length; i++) { //for cest un boucle dcp sa se repete plusieres fois "let = i" i est un compteur et on commence a 0 parceque sa commence toujours a 0"animals length"= cest combiens de animals ya et la yen a 6 dcp tant que i est inferieur que 6 le boucle continue (=i + 1  le boucle peut pas etre en infinie cest a eviter)
    console.log(animals[i]);
}

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];  // Afficher tous les éléments du tableau gods avec la syntaxe for ... of
for (let god of gods) {
    console.log(god);
}
//for..of la on veut just les valeurs c'est pour sa cest plus simple le tableaux parceque java fais pour moi 