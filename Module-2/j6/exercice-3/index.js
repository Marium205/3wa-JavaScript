const text = document.getElementById("text");
const select = document.getElementById("select");
const message = document.getElementById("message");

text.addEventListener("input", function () {
    console.log(text.value);
});

select.addEventListener("change", function () {
    console.log(select.value);
});

message.addEventListener("input", function () {
    console.log(message.value);
});