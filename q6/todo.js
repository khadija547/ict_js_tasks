const tasks = [];

function addTask(task) {
  if (task.trim() === "") {
    console.log("Error: Task cannot be empty.");
    return;
  }
  if (tasks.includes(task)) {
    console.log("Error: Task already exists -> " + task);
    return;
  }
  tasks.push(task);
  console.log("Added: " + task);
}

function markDone(index) {
  if (index < 0 || index >= tasks.length) {
    console.log("Error: Invalid index " + index);
    return;
  }
  tasks[index] = "[Done] " + tasks[index];
}

function updateTask(index, newText) {
  if (index < 0 || index >= tasks.length) {
    console.log("Error: Invalid index " + index);
    return;
  }
  tasks[index] = newText;
}

function countPending() {
  let count = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].startsWith("[Done] ")) {
      count++;
    }
  }
  return count;     // returns the number (does not print it)
}

function clearTasks() {
  tasks.length = 0;
  // Works because we are not giving tasks a new array.
  // We only change the length of the SAME array to 0, which removes
  // everything inside. const allows changing the inside, not reassigning.
}

// Testing 
addTask("Buy milk");
addTask("Study JavaScript");
addTask("");                  // empty -> error
addTask("Buy milk");          // duplicate -> error
addTask("Do laundry");
addTask("Call mom");
console.log(tasks);

markDone(1);
markDone(10);                 // invalid -> error
updateTask(0, "Buy bread");
updateTask(-1, "Hello");      // invalid -> error
console.log(tasks);

console.log("Pending tasks:", countPending());   // 3

clearTasks();
console.log(tasks);           // []