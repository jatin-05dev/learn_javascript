 let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

// Page load hote hi saved tasks show kar do
window.onload = loadTasks;

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTaskElement(taskText, false); // New task add karo
  saveTask(taskText, false); // Storage me save karo
  taskInput.value = "";
}

function createTaskElement(taskText, isCompleted) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;
  if (isCompleted) {
    span.classList.add("completed");
  }

  // Complete toggle
  span.onclick = function () {
    span.classList.toggle("completed");
    updateStorage();
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = function () {
    taskList.removeChild(li);
    updateStorage();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Save single task to localStorage
function saveTask(text, completed) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: text, completed: completed });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update storage after delete/complete
function updateStorage() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    let span = li.querySelector("span");
    tasks.push({
      text: span.textContent,
      completed: span.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load saved tasks
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}
