//DOM ELEMENTS
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const allTasks = document.querySelector("#total-tasks");
const remainingTasks = document.querySelector("#remaining-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const mainInput = document.querySelector("#todo-form input");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    createTask(task);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = mainInput.value;
  if (inputValue == "") {
    return;
  }

  const task = {
    id: new Date().getTime(),
    name: inputValue,
    isCompleted: false,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(task);

  todoForm.reset();
  mainInput.focus();
});

todoList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("remove-task") ||
    e.target.parseElement.classList.contains("remove-task") ||
    e.target.parentElement.parentElement.classList.contains("remove-task")
  ) {
    const taskId = e.target.closest("li").id;
    removeTask(taskId);
  }
});

todoList.addEventListener("Keydown", (e) => {
  if ((e.keycode = 13)) {
    e.preventDefault();

    e.target.blur;
  }
});

todoList.addEventListener("input", (e) => {
  const taskId = e.target.closest("li").id;

  updateTask(taskId, e.target);
});

function createTask(task) {
  const taskEl = document.createElement("li");

  taskEl.setAttribute("id", task.id);

  if (task.isCompleted) {
    taskEl.classList.add("complete");
  }

  const taskElMarkup = `
  <div>
    <input type="checkbox" name="tasks" id="${task.id}" ${
    task.isCompleted ? "checked" : ""
  }>
    <span ${!task.isCompleted ? "contenteditable" : ""}>${task.name}</span> 
  </div>
  <button title="Remove "${task.name}" task" class="remove-task"></button>
  `;

  taskEl.innerHTML = taskElMarkup;

  todoList.appendChild(taskEl);
}

function countTasks() {
  const completedTasksArray = tasks.filter((task) => {
    task.isCompleted = true;
  });

  allTasks.textContent = tasks.length;
  completedTasks.text = completedTasksArray.length;
  remainingTasks = tasks.length - completedTasksArray.length;
}

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));

  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById(taskId).remove();

  countTasks();
}

function updateTask(taskId, el) {
  const task = tasks.find((task) => (task.id = parseInt(taskId)));

  if (el.hasAttribute("contenteditable")) {
    task.name = el.textContent;
  } else {
    const span = el.nextElementSibling;
    const parent = el.closest("li");

    task.isCompleted = !task.isCompleted;

    if (task.isCompleted) {
      span.removeAttribute("contenteditable");
      parent.classList.add("complete");
    } else {
      span.setAttribute("contentediatble", "true");
      parent.classList.remove("complete");
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));

  countTasks();
}
