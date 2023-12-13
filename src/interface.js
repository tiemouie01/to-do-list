import Project from "./project";
import ToDo from "./todo";

const projects = [];
projects.push(Project("Today's Todos"));

function addProject(projectName) {
  // Add a newly created project to the sidebar.
  const projectsDiv = document.querySelector(".projects");
  const newProject = document.createElement("div");
  newProject.textContent = projectName;
  projectsDiv.appendChild(newProject);
}

function newProjectForm(projectModal) {
  // Create a from that asks a user for the name of the new project.
  const form = document.createElement("form");

  // Add a label that asks the user to the name of the project.
  const label = document.createElement("label");
  label.setAttribute("for", "project-name");
  label.textContent = "Enter the new project's name:";
  form.appendChild(label);

  // Include a text box for the user to enter the name.
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "project-name");
  input.setAttribute("name", "projectName");
  form.appendChild(input);

  // Add a button that creates the project and adds it to the global project array.
  const createProjectButton = document.createElement("button");
  createProjectButton.setAttribute("type", "submit");
  createProjectButton.classList.add("create-project");
  createProjectButton.textContent = "Create Project";
  createProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    projectModal.close();

    // Collect the project name from the text box. Add it to the global projects array and to the screen.
    const projectName = document.getElementById("project-name").value;
    projects.push(Project(projectName));
    addProject(projectName);

    // Remove the modal from the DOM.
    projectModal.remove();
  });
  form.appendChild(createProjectButton);
  return form;
}

function addProjectEvent() {
  // Select the "Add Project" button from the DOM.
  const addProjectButton = document.querySelector(".add-project");

  // Add event listener to the project that produces a modal.
  addProjectButton.addEventListener("click", () => {
    // Create a modal that has a form which receives the project name.
    const projectModal = document.createElement("dialog");
    projectModal.classList.add("project-modal");

    projectModal.appendChild(newProjectForm(projectModal));

    document.body.appendChild(projectModal);
    projectModal.showModal();
  });
}

function createId(value) {
  // Change the value to lower case and replace any whitespaces with '-'.
  return value.toLowerCase().replace(" ", "-");
}

function loadProject(name = "") {
  // Get the name of the project from the DOM's main div if no name has been specified.
  // Search and find a project using its name as the search parameter and return the Project Object.
  if (!name) {
    name = document.querySelector(".main-content > h1").textContent;
  }
  return projects.find((project) => project.getName() === name);
}

function viewTodoForm(title, dueDate, priority, description, note) {
  const form = document.createElement("form");

  form.appendChild(createFormField("Title", title));
  form.appendChild(createFormField("Due Date", dueDate));
  form.appendChild(createFormField("Priority", priority));
  form.appendChild(createTextArea("Description", description));
  form.appendChild(createTextArea("Note", note));

  const editTodoButton = document.createElement("button");
  editTodoButton.setAttribute("type", "submit");
  editTodoButton.textContent = "Edit Todo";
  editTodoButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Add the todo to the project.
    makeChanges(title);

    // Close the modal.
    const todoModal = document.querySelector(".edit-todo-modal");
    todoModal.close();
    todoModal.remove();
  });
  form.appendChild(editTodoButton);

  return form;
}

function editTodo(todo) {
  const mainContent = document.querySelector(".main-content");
  // Create a modal that will hold the form and view it.
  const todoModal = document.createElement("dialog");
  todoModal.className = "edit-todo-modal";
  todoModal.appendChild(
    viewTodoForm(
      todo.title,
      todo.dueDate,
      todo.priority,
      todo.description,
      todo.getNote(),
    ),
  );
  mainContent.appendChild(todoModal);
  todoModal.showModal();
}

function createTodoCard(todo) {
  // Create card div and set it's id.
  const card = document.createElement("div");
  card.setAttribute("id", createId(todo.title));

  // add the title
  const title = document.createElement("h2");
  title.textContent = todo.title;
  card.appendChild(title);

  // add the due date.
  const dueDate = document.createElement("p");
  dueDate.textContent = todo.dueDate;
  card.appendChild(dueDate);

  // add a set of buttons for setting importance and deleting a todo and add event listeners for both buttons using setImportant() and deleteTodo(title).
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("card-buttons");

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteTodo(todo.title);
  });
  buttonContainer.appendChild(deleteButton);
  card.appendChild(buttonContainer);

  // Add an event listener that allows a user to view the card in full.
  card.addEventListener("click", () => {
    editTodo(todo);
  });
  return card;
}

function loadCards() {
  // Clear the screen of any todo cards present.
  const cardContainer = document.querySelector(".card-container");
  while (cardContainer.firstElementChild) {
    cardContainer.removeChild(cardContainer.firstElementChild);
  }

  // Loop through each todo in the project and create it's card using createTodoCard().
  const todos = loadProject().getTodoList();
  todos.forEach((todo) => {
    cardContainer.appendChild(createTodoCard(todo));
  });
}

function deleteTodo(title) {
  // Load the project using loadProject().
  const project = loadProject();

  // Remove the todo from the project's todo array using the Project.removeTodo(title) method.
  project.removeTodo(title);

  // Reload the cards in the page using loadCards();
  loadCards();
}

function createTodo(event) {
  // This function is executed when a user clicks "Create Todo" on the "Add Todo" form.

  event.preventDefault();
  // load the project using loadProject().
  const project = loadProject();

  // Collect todo object data from form elements.
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const note = document.getElementById("note").value;

  // add the todo to project's array of todos.
  project.addTodo(title, description, dueDate, priority, note);

  // reload the project cards on the page using loadCards().
  loadCards();
}

function makeChanges(oldTitle) {
  // This function is executed when a user clicks "edit todo" on the "View Todo" form.
  // load the project into a variable using loadProject().
  const project = loadProject();

  // Create a new ToDo object using the entries in the form.
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const note = document.getElementById("note").value;
  const modifiedTodo = ToDo(title, description, dueDate, priority, note);

  // Replace the old ToDo with the new ToDo using Project.editTodo().
  project.editTodo(oldTitle, modifiedTodo);
  // Load the cards using loadCards().
  loadCards();
}

// Functions that create the necessary form fields for creating and modifying a todo.

function createTextArea(name, value) {
  // Create the container for the field.
  const fieldContainer = document.createElement("div");

  // Add label and textarea elemtents to the container.

  const label = document.createElement("label");
  label.setAttribute("for", createId(name));
  label.textContent = `${name}:`;
  fieldContainer.appendChild(label);

  const textArea = document.createElement("textarea");
  textArea.setAttribute("type", "text");
  textArea.setAttribute("name", createId(name));
  textArea.setAttribute("id", createId(name));
  textArea.setAttribute("rows", "20");
  textArea.setAttribute("cols", "30");
  if (value) {
    textArea.textContent = value;
  }
  fieldContainer.appendChild(textArea);

  return fieldContainer;
}

function createFormField(name, value = "") {
  // Create the container for the field.
  const fieldContainer = document.createElement("div");

  // Add label and input elemtents to the container.

  const label = document.createElement("label");
  label.setAttribute("for", createId(name));
  label.textContent = `${name}:`;
  fieldContainer.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", createId(name));
  input.setAttribute("id", createId(name));
  if (value) {
    input.setAttribute("value", value);
  }
  fieldContainer.appendChild(input);

  return fieldContainer;
}

function createTodoForm() {
  // Create the form's container.
  const form = document.createElement("form");

  // Add form entries for title, description, due date, priority, and notes.
  form.appendChild(createFormField("Title"));
  form.appendChild(createFormField("Due Date"));
  form.appendChild(createFormField("Priority"));
  form.appendChild(createTextArea("Description"));
  form.appendChild(createTextArea("Note"));

  // Add event listener to submit button thet calls createTodo().
  const createTodoButton = document.createElement("button");
  createTodoButton.setAttribute("type", "submit");
  createTodoButton.textContent = "Create Todo";
  createTodoButton.addEventListener("click", (event) => {
    // Add the todo to the project.
    createTodo(event);

    // Close the modal.
    const todoModal = document.querySelector(".create-todo-modal");
    todoModal.close();
    todoModal.remove();
  });
  form.appendChild(createTodoButton);

  return form;
}

function viewProject(projectName) {
  // Remove any previously loaded pages from the main section.
  const mainContent = document.querySelector(".main-content");
  while (mainContent.firstElementChild) {
    mainContent.removeChild(mainContent.firstElementChild);
  }

  // Add the name of the project at the top of the main section.
  const projectNameDiv = document.createElement("h1");
  projectNameDiv.textContent = projectName;
  mainContent.appendChild(projectNameDiv);

  // Add an "Add Todo" button.
  // Add event listener for the "Add Todo" button.
  const addTodo = document.createElement("button");
  addTodo.className = "add-button";
  addTodo.textContent = "Add Todo";
  addTodo.addEventListener("click", () => {
    // Create a modal for that will hold the form.
    const todoModal = document.createElement("dialog");
    todoModal.className = "create-todo-modal";
    // Append the form to the modal.
    todoModal.appendChild(createTodoForm());
    // Add the modal to the DOM.
    mainContent.appendChild(todoModal);
    // View the modal on on the page.
    todoModal.showModal();
  });
  mainContent.appendChild(addTodo);

  // Create container for todo cards.
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  mainContent.appendChild(cardContainer);

  // Load the cards using loadCards();
  loadCards();
}

export { addProjectEvent, viewProject };

// function setImportant(title) {
//   // load the project using loadTodo().
//   const project = loadProject();
//   const importantProject = loadProject("Important");

//   // Get the todo using Project.getTodo(title) method.
//   // Add the return todo to the important project using the global Project array.
//   importantProject.addTodo(project.getTodo(title));
// }
