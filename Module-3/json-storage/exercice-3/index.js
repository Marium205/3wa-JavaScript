let data = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};

let str =
  "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function () {
  // Objet -> JSON (string)
  let dataJson = JSON.stringify(data);
  console.log(dataJson);

  // JSON (string) -> objet
  let obj = JSON.parse(str);
  console.log(obj);
});