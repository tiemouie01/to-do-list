function logMessage(message) {
  console.log(message);
}

function viewTodos(project) {
  console.log(`Project Name: ${project.getName()}`);

  console.log("Todos:");
  console.table(project.getTodoList());

  console.log("Completed todos:");
  console.table(project.getCompletedList());
}

export { logMessage, viewTodos };
