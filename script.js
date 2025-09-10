function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create <li>
  let li = document.createElement("li");

  // Task text span
  let span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => span.classList.toggle("completed"));

  // Button group container
  let btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", () => updateTask(span));

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => li.remove());

  // Append buttons to button group
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  // Append span and button group to li
  li.appendChild(span);
  li.appendChild(btnGroup);

  // Append li to the list
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// Update task function
function updateTask(taskSpan) {
  let newTask = prompt("Update task:", taskSpan.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask.trim();
  }
}
