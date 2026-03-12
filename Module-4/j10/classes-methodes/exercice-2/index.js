class User {
  firstName;
  lastName;
  frenchGrades;
  mathGrades;

  constructor(firstName, lastName, frenchGrades, mathGrades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frenchGrades = frenchGrades;
    this.mathGrades = mathGrades;
  }

  getAverage() {
    let sum = 0;

    for (let grade of this.frenchGrades) {
      sum += grade;
    }

    for (let grade of this.mathGrades) {
      sum += grade;
    }

    let totalGrades = this.frenchGrades.length + this.mathGrades.length;

    return sum / totalGrades;
  }
}

let mari = new User('Mari', 'Doucet', [11, 17], [9, 7]);

console.log(mari.getAverage());