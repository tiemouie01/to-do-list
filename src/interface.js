import Project from "./project";
import ToDo from "./todo";

function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");

  // Add a title to the todo card
  const title = document.createElement("h2");
  title.textContent = todo.title;
  todoCard.appendChild(title);

  // Add a due date to the todo card
  const dueDate = document.createElement("p");
  dueDate.textContent = todo.dueDate;
  todoCard.appendChild(dueDate);

  // Add buttons that set importance and remove a todo.
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("todo-buttons");

  const importanceButton = document.createElement("button");
  const importanceIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
  importanceButton.innerHTML = importanceIcon;
  buttonDiv.appendChild(importanceButton);

  const removeTodoButton = document.createElement("button");
  const removeTodoIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
  removeTodoButton.innerHTML = removeTodoIcon;
  buttonDiv.appendChild(removeTodoButton);

  todoCard.appendChild(buttonDiv);
}

function viewProject(project) {
  const mainDiv = document.querySelector(".main-content");

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project.getName();
  mainDiv.appendChild(projectTitle);

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "Add todo";
  addTodoButton.classList.add("add-todo");
  mainDiv.appendChild(addTodoButton);
}

export default function ScreenController() {}
