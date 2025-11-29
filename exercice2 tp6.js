const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);
    li.appendChild(buttons);
    taskList.appendChild(li);
    input.value = "";
});
