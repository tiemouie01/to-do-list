import ToDo from "./todo.js";

export default function Project(name) {
    const todos = [];
    const completedTodos = [];

    const addTodo = (title, description, dueDate, priority) => {
        todos.push(ToDo(title, description, dueDate, priority));
    };

    const removeTodo = (title) => {
        const index = todos.findIndex(todo => todo.title === title);
        todos.splice(index,1);
    }

    const completeTodo = (title) => {
        const index = todos.findIndex(todo => todo === title);
        completedTodos.push(todos.splice(index,1)[0]);
    }

    const changeTodoPriority = (title, value) => {
        const todo = todos.find(todo => todo.title === title);
        todo.priority = value;
    }

    const getName = () => name;
    const getTodoList = () => todos;
    const getCompletedList = () => completedTodos;

    return {
        getName,
        addTodo,
        removeTodo,
        completeTodo,
        changeTodoPriority,
        getTodoList,
        getCompletedList
    }
}