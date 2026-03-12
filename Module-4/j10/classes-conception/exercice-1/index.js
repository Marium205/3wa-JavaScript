class Student {
  firstName;
  lastName;
  mathGrades;
  frenchGrades;
  englishGrades;
  constructor(firstName, lastName, mathGrades, frenchGrades, englishGrades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mathGrades = mathGrades;
    this.frenchGrades = frenchGrades;
    this.englishGrades = englishGrades;
  }
  getAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
      sum += grade;
    }
    return sum / grades.length;
  }

  getMathAverage() {
    return this.getAverage(this.mathGrades);
  }

  getFrenchAverage() {
    return this.getAverage(this.frenchGrades);
  }

  getEnglishAverage() {
    return this.getAverage(this.englishGrades);
  }

  getGeneralAverage() {
    let sum = 0;
    let count = 0;

    for (let grade of this.mathGrades) {
      sum += grade;
      count++;
    }
    for (let grade of this.frenchGrades) {
      sum += grade;
      count++;
    }
    for (let grade of this.englishGrades) {
      sum += grade;
      count++;
    }

    return sum / count;
  }

  getBestSubject() {
    let mathAvg = this.getMathAverage();
    let frenchAvg = this.getFrenchAverage();
    let englishAvg = this.getEnglishAverage();

    if (mathAvg >= frenchAvg && mathAvg >= englishAvg) {
      return "Maths";
    } else if (frenchAvg >= mathAvg && frenchAvg >= englishAvg) {
      return "Français";
    } else {
      return "Anglais";
    }
  }
}
// Test
let student = new Student("Mari", "Doucet", [10, 12, 14], [11, 17], [9, 13, 15]);

console.log(student.getMathAverage());
console.log(student.getFrenchAverage());
console.log(student.getEnglishAverage());
console.log(student.getGeneralAverage());
console.log(student.getBestSubject());