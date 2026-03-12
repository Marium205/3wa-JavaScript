let user = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !",
};
document.addEventListener("DOMContentLoaded", function () {
  let storedUser = sessionStorage.getItem("user");
  if (storedUser === null) {
    let userJson = JSON.stringify(user);
    sessionStorage.setItem("user", userJson);
  } else {
    let userObj = JSON.parse(storedUser);
    console.log(userObj);
  }
});