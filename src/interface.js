import Project from "./project";
import ToDo from "./todo";

const projects = [];
projects.push(Project("Default"));

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

export { addProjectEvent };

// import Project from "./project";
// import ToDo from "./todo";

// // Create an array of all Projects on the to be displayed on the screen.
// const projects = [];
// projects.push(Project("Daily"));
// projects.push(Project("Important"));
// projects.push(Project("Tasks"));

// function createId(value) {
//   // Change the value to lower case and replace any whitespaces with '-'.
//   return value.toLowerCase().replace(" ", "-");
// }

// function loadProject(name = "") {
//   // Get the name of the project from the DOM's main div if no name has been specified.
//   // Search and find a project using its name as the search parameter and return the Project Object.
//   if (!name) {
//     name = document.querySelector(".main-content h1").textContent;
//   }
//   return projects.find((project) => project.getName() === name);
// }

// function loadCards() {
//   // Clear the screen of any todo cards present.
//   const oldContainer = document.querySelector(".card-container");
//   if (oldContainer) {
//     oldContainer.remove();
//   }

//   // Create a container for all the cards.
//   const container = document.createElement("div");

//   // Loop through each todo in the project and create it's card using createTodoCard().
//   const todos = loadProject().getTodoList();
//   todos.forEach((todo) => {
//     container.appendChild(createTodoCard(todo));
//   });
// }

// function deleteTodo(title) {
//   // Load the project using loadProject().
//   const project = loadProject();

//   // Remove the todo from the project's todo array using the Project.removeTodo(title) method.
//   project.removeTodo(title);

//   // Reload the cards in the page using loadCards();
//   loadCards();
// }

// function setImportant(title) {
//   // load the project using loadTodo().
//   const project = loadProject();
//   const importantProject = loadProject("Important");

//   // Get the todo using Project.getTodo(title) method.
//   // Add the return todo to the important project using the global Project array.
//   importantProject.addTodo(project.getTodo(title));
// }

// function createTodoCard(todo) {
//   // Create card div and set it's id.
//   const card = document.createElement("div");
//   card.setAttribute("id", createId(todo.title));

//   // add the title
//   const title = document.createElement("h2");
//   title.textContent = todo.title;
//   card.appendChild(title);

//   // add the due date.
//   const dueDate = document.createElement("p");
//   dueDate.textContent = todo.dueDate;
//   card.appendChild(dueDate);

//   // add a set of buttons for setting importance and deleting a todo and add event listeners for both buttons using setImportant() and deleteTodo(title).
//   const buttonContainer = document.createElement("div");
//   buttonContainer.classList.add("card-buttons");

//   const importantButton = document.createElement("button");
//   importantButton.addEventListener("click", setImportant(todo.title));
//   buttonContainer.appendChild(importantButton);

//   const deleteButton = document.createElement("button");
//   deleteButton.addEventListener("click", deleteTodo(todo.title));
//   buttonContainer.appendChild(deleteButton);

//   card.appendChild(buttonContainer);
//   return card;
// }

// function createTodo(event) {
//   // This function is executed when a user clicks "Create Todo" on the "Add Todo" form.

//   event.preventDefault();
//   // load the project using loadProject().
//   const project = loadProject();

//   // Collect todo object data from form elements.
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const dueDate = document.getElementById("due-date");
//   const priority = document.getElementById("priority").value;
//   const note = document.getElementById("note").value;

//   // add the todo to project's array of todos.
//   project.addTodo(title, description, dueDate, priority, note);

//   // reload the project cards on the page using loadCards().
//   loadCards(project.getName());
// }

// function makeChanges(oldTitle) {
//   // This function is executed when a user clicks "Make Changes" on the "View Todo" form.
//   // load the project into a variable using loadProject().
//   const project = loadProject();

//   // Create a new ToDo object using the entries in the form.
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const dueDate = document.getElementById("due-date");
//   const priority = document.getElementById("priority").value;
//   const note = document.getElementById("note").value;
//   const modifiedTodo = ToDo(title, description, dueDate, priority, note);

//   // Replace the old ToDo with the new ToDo using Project.editTodo().
//   project.editTodo(oldTitle, modifiedTodo);
//   // Load the cards using loadCards().
//   loadCards(project.getName());
// }

// function viewProject(project) {
//   // Remove any previously loaded pages from the main section.
//   const mainContent = document.querySelector(".main-content");
//   while (mainContent.firstElementChild) {
//     mainContent.removeChild(mainContent.firstElementChild);
//   }

//   // Add the name of the project at the top of the main section.
//   const projectName = document.createElement("h1");
//   projectName.textContent = project.getName();
//   mainContent.appendChild(projectName);

//   // Add an "Add Todo" button.
//   // Add event listener for the "Add Todo" button.
//   const addTodo = document.createElement("button");
//   addTodo.className = "add-button";
//   addTodo.addEventListener("click", (event) => {
//     createTodo(event);
//   });

//   // Load the cards using loadCards();
//   loadCards(project.getName());
// }

// function addProject() {
//   // Create and add the project to the global projects array.
//   const projectName = document.getElementById("project-name").value;
//   const project = Project(projectName);
//   projects.push(project);

//   // Query personal sidebar div into a variable.
//   const personalDiv = document.querySelector(".personal");

//   // Create the new project's div and add an event listener that loads it into the main section.
//   const projectDiv = document.createElement("div");
//   projectDiv.className = `preset ${createId(projectName)}`;
//   projectDiv.textContent = projectName;
//   projectDiv.addEventListener("click", () => {
//     viewProject(project);
//   });
//   personalDiv.appendChild(projectDiv);
// }

// function addProjectEvents() {
//   // Add event listeners to all project names on the sidebar that clear the main section and load the project's information.
//   const dailyProject = document.querySelector(".my-day");
//   dailyProject.addEventListener("click", () => {
//     viewProject(projects[0]);
//   });

//   const importantProject = document.querySelector(".important");
//   importantProject.addEventListener("click", () => {
//     viewProject(projects[1]);
//   });

//   const groceriesProject = document.querySelector(".groceries");
//   groceriesProject.addEventListener("click", () => {
//     viewProject(projects[2]);
//   });

//   const tasksProject = document.querySelector(".tasks");
//   tasksProject.addEventListener("click", () => {
//     viewProject(projects[3]);
//   });
// }

// function createPersonalProject() {
//   // Add a modal to the body.
//   const projectModal = document.createElement("dialog");
//   projectModal.className = "create-personal";

//   // Request the name of the new project, including a space for entering the name and a submission button.
//   const projectForm = document.createElement("form");

//   // Add a label for the input.
//   const label = document.createElement("label");
//   label.setAttribute("for", "project-name");
//   label.textContent = "Project Name";
//   projectForm.appendChild(label);

//   // Add a text box where the user can enter the name.
//   const textBox = document.createElement("input");
//   textBox.setAttribute("id", "project-name");
//   textBox.setAttribute("type", "text");
//   textBox.setAttribute("name", "project-name");
//   projectForm.appendChild(textBox);

//   const createProjectBtn = document.createElement("button");
//   createProjectBtn.setAttribute("type", "submit");
//   createProjectBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     addProject();
//   });
//   projectModal.appendChild(projectForm);

//   document.body.appendChild(projectModal);
// }
