const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (password.value === confirmPassword.value) {
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");

        password.classList.add("valid");
        confirmPassword.classList.add("valid");
    } else {
        password.classList.remove("valid");
        confirmPassword.classList.remove("valid");

        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }
});