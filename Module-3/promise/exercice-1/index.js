// Fonction qui reçoit un âge et retourne une Promise
function verifierAge(age) {
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      resolve("Autorisation accordée.");
    } else {
      reject("Autorisation refusée.");
    }
  });
}
// Test avec l'âge 42
verifierAge(42)
  .then(function (message) {
    console.log("42 ans :", message);
  })
  .catch(function (message) {
    console.log("42 ans :", message);
  });
// Test avec l'âge 16
verifierAge(16)
  .then(function (message) {
    console.log("16 ans :", message);
  })
  .catch(function (message) {
    console.log("16 ans :", message);
  });