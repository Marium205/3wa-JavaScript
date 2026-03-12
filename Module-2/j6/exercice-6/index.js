const checkbox = document.getElementById("check");
const button = document.getElementById("btn");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});