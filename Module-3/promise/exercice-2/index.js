function reduction(age) {
  return new Promise(function (resolve, reject) {
    if (age < 25) {
      resolve("Reduction jeunes");
    } else if (age > 65) {
      resolve("Reduction Séniors");
    } else {
      reject("Pas de reduction");
    }
  });
}
reduction(20)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
  reduction(40)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
  reduction(70)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });