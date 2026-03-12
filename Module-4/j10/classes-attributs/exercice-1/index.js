class Cat {
  name;
  age;
  color;

  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

let garfield = new Cat('Garfield', 10, 'orange');
let felix = new Cat('Felix', 5, 'noir et blanc');

console.log(garfield);
console.log(felix);