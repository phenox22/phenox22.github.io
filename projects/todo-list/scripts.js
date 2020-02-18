let addTaskButton;
let accessInput;
const accessTaskList = document.getElementById("task-list");
let taskInputted;
let addTaskDiv;
let addTaskText;

function getTask() {
    accessInput = document.querySelector(".task-input");
    console.log(accessInput);
    taskInputted = accessInput.value;
    makeTask();
}


function makeTask() {
    addTaskDiv = document.createElement("div");
    addTaskText = document.createElement("p");
    addTaskButton = document.createElement("button");
    addTask();
}



function addTask() {
    accessTaskList.appendChild(addTaskDiv);
    addTaskDiv.appendChild(addTaskButton);
    addTaskDiv.appendChild(addTaskText);

    addTaskDiv.classList.add("task");
    addTaskText.classList.add("task-text");
    addTaskButton.classList.add("task-button");

    addTaskButton.addEventListener('click', taskRemove);

    addTaskText.innerText = taskInputted;

    accessInput.value ='';
}
    

function removeAllTasks() {
    accessTaskList.innerHTML = "";
}

function taskRemove() {
    event.currentTarget.parentNode.remove();
}