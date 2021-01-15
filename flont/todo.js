
const addTask = document.getElementById("addTask");
const list = document.getElementById("list");
const taskTitle = document.getElementById("taskTitle");

const addTodo = task => {
  const taskList = document.createElement("li");
  const removeButton = document.createElement("button");

  taskList.textContent = task;

  list.appendChild(taskList);
  taskList.appendChild(removeButton);

  removeButton.textContent = '削除';
  removeButton.addEventListener("click", () => {
    const rmtask = removeButton.closest("li");
    list.removeChild(rmtask);
 });
};

addTask.addEventListener("click", () => {
  const task = taskTitle.value;
  addTodo(task);
  taskTitle.value = '';
});
