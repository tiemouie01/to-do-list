import ToDo from "./todo";

export default function Project(name) {
  const todos = [];
  const completedTodos = [];

  const addTodo = (title, description, dueDate, priority) => {
    todos.push(ToDo(title, description, dueDate, priority));
  };

  const editTodo = (title, modifiedTodo) => {
    const index = todos.findIndex((todo) => todo.title === title);
    todos.splice(index, 1, modifiedTodo);
  };
  const removeTodo = (title) => {
    const index = todos.findIndex((todo) => todo.title === title);
    todos.splice(index, 1);
  };

  const completeTodo = (title) => {
    const index = todos.findIndex((todo) => todo === title);
    completedTodos.push(todos.splice(index, 1)[0]);
  };

  const getTodo = (title) => todos.find((todo) => todo.title === title);

  const changeTodoPriority = (title, value) => {
    todos.find((todo) => todo.title === title).priority = value;
  };

  const getName = () => name;
  const getTodoList = () => todos;
  const getCompletedList = () => completedTodos;

  return {
    getName,
    addTodo,
    editTodo,
    removeTodo,
    getTodo,
    completeTodo,
    changeTodoPriority,
    getTodoList,
    getCompletedList,
  };
}
