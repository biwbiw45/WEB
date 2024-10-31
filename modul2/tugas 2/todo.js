const todoList = document.getElementById("todo-list");

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement("li"); //ul
    const span = document.createElement("span");
    span.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => enableEdit(span, editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    taskInput.value = "";
  }
}

function enableEdit(span, editBtn) {
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = span.textContent;
  
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  
  saveBtn.onclick = () => {
    span.textContent = inputField.value.trim();
    span.style.display = "inline";
    editBtn.style.display = "inline";
    inputField.remove();
    saveBtn.remove();
  };

  span.style.display = "none";
  editBtn.style.display = "none";
  span.parentNode.insertBefore(inputField, span.nextSibling);
  span.parentNode.insertBefore(saveBtn, inputField.nextSibling);
}
