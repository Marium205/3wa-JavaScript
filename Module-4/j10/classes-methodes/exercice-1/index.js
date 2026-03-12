class User {
  firstName;
  lastName;
  dateOfBirth;

  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  introduce() {
    return `${this.firstName} ${this.lastName}, né le ${this.dateOfBirth}`;
  }
}
let hugues = new User('Hugues', 'Froger', '18 mars 1992');
console.log(hugues.introduce());