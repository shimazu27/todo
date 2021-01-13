
const addTask = document.getElementById("addTask");
const list = document.getElementById("list");
const taskTitle = document.getElementById("taskTitle");

const addTodo = task => {
  const taskList = document.createElement("li");
  taskList.textContent = task;
  list.appendChild(taskList);
};

addTask.addEventListener("click",evnet => {
  const task = taskTitle.value;
  addTodo(task);
  taskTitle.value = '';
});
