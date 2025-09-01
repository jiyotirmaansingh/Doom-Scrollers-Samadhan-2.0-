const apiUrl = "http://localhost:5000/todos";
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Fetch and display tasks
async function loadTodos() {
  const res = await fetch(apiUrl);
  const todos = await res.json();
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-text");
    taskDiv.innerHTML = `<strong>${todo.text}</strong>`;

    const timeDiv = document.createElement("div");
    timeDiv.classList.add("task-time");
    const date = new Date(todo.createdAt);
    timeDiv.innerText = date.toLocaleString();

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = async () => {
      await fetch(`${apiUrl}/${todo._id}`, { method: "DELETE" });
      loadTodos();
    };

    li.appendChild(taskDiv);
    li.appendChild(timeDiv);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

// Add new task
addBtn.addEventListener("click", async () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  todoInput.value = "";
  loadTodos();
});

// Load tasks on page load
loadTodos();
