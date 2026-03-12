const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(password);
});