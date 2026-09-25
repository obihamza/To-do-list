const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const deleteAllBtn = document.getElementById("delete-all");

addTaskBtn.addEventListener("click", function () {

    const title = taskTitle.value;
    const description = taskDescription.value;

    if (title.trim() === "") {
        return;
    }
    
    const task = document.createElement("div");
    const taskTitleElement = document.createElement("h3");
    const taskDescriptionElement = document.createElement("p");
    const deleteBtn = document.createElement("button");


    taskTitleElement.textContent = title;
    taskDescriptionElement.textContent = description;
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(taskTitleElement);
    task.appendChild(taskDescriptionElement);
    task.appendChild(deleteBtn);
    
    taskList.appendChild(task);

    taskTitle.value = "";
    taskDescription.value = ""; 
});

deleteAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});