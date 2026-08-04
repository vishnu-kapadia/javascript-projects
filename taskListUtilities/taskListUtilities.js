function addTask(tasks, title) {
  let newId = tasks.length + 1;

  let newTask = {
    id: newId,
    title: title,
    completed: false
  };

  tasks.push(newTask);
  return tasks;
}

function completeTask(tasks, taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].completed = true;
    }
  }
  return tasks;
}

function removeTask(tasks, taskId) {
  let updatedTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id !== taskId) {
      updatedTasks.push(tasks[i]);
    }
  }

  return updatedTasks;
}

function countIncompleteTasks(tasks) {
  let count = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === false) {
      count++;
    }
  }

  return count;
}

let tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false }
];

tasks = addTask(tasks, "Build task utilities");

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].title);
}

tasks = completeTask(tasks, 2);

console.log("Incomplete Tasks:", countIncompleteTasks(tasks));

tasks = removeTask(tasks, 1);

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id);
}
