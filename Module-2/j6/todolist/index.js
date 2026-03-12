const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value;
    if (text === "") {
        return;
    }
    // créer li
    const li = document.createElement("li");
    li.classList.add("todo-item");
    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = text;
    const button = document.createElement("button");
    button.classList.add("delete-btn");
    button.textContent = "Supprimer";
    // checkbox → barrer le texte
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });
    // supprimer la tâche
    button.addEventListener("click", function () {
        li.remove();
    });
    // assembler
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    input.value = "";
});