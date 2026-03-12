class User {
  firstName;
  lastName;
  grades;
  
  constructor(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
}
let mari = new User('Mari', 'Doucet', [13, 12, 15]);
let hugues = new User('Hugues', 'Froger', [14, 11, 17, 13]);
console.log(mari);
console.log(hugues);
console.log(mari.grades.length);
console.log(hugues.grades.length);