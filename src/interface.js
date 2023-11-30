import Project from "./project";
import ToDo from "./todo";

function addProjectEvents() {
  // Add event listeners to all project names on the sidebar that clear the main section and load the project's information.
}

function loadProject() {
  // Get the name of the project from the DOM's main div.
  // Search and find a project using its name as the search parameter and return the Project Object.
}

function loadCards() {
  // Clear the screen of any todo cards present.
  // Create a container for all the cards.
  // Loop through each todo in the project and create it's card using createTodoCard().
}

function deleteTodo(title) {
  // Load the project using loadTodo().
  // Remove the todo from the project's todo array using the Project.removeTodo(title) method.
  // Reload the cards in the page using loadCards();
}

function setImportant(title) {
  // load the project using loadTodo().
  // Get the todo using Project.getTodo(title) method.
  // Add the return todo to the important project using the global Project array.
}

function createTodoCard(todo) {
  // set id for card.
  // add the title
  // add the due date.
  // add a set of buttons for setting importance and deleting a todo.
  // add event listeners for both buttons using setImportant() and deleteTodo(title).
}

function createTodo() {
  // This function is executed when a user clicks "Create Todo" on the "Add Todo" form.
  // load the project using loadProject().
  // add the todo to project's array of todos.
  // reload the project cards on the page using loadCards().
}

function makeChanges() {
  // This function is executed when a user clicks "Make Changes" on the "View Todo" form.
  // load the project into a variable using loadProject().
}

function viewProject() {
  // Remove any previously loaded pages from the main section.
  // Add the name of the project at the top of the main section.
  // Add an "Add Todo" button.
  // Add event listener for the "Add Todo" button.
  // Load the cards using loadCards();
}

function addProject(projectName) {
  // Query personal sidebar div into a variable.
  // Add event listener to project div that loads it onto the main section.
}

function createPersonalProject() {
  // Add a modal to the body.
  // Request the name of the new project, including a space for entering the name and a submission button.
  // Add an event listener to the submit button that creates a new project, appends it to the global projects array.
  // Event listener should add the new project the DOM using addProject().
}