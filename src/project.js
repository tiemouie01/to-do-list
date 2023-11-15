import ToDo from "./todo.js";
import { getValue } from "./console.js";

export default function Project(name) {
    const todos = [];
    const completedTodos = [];

    const addTodo = () => {
        const title = getValue('title');
        const description = getValue('description');
        const dueDate = getValue('due date');
        const priority = getValue('priority');
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
        todo.setPriority(value);
    }

    const getTodoList = () => todos;
    const getCompletedList = () => completedTodos;

    return {
        addTodo,
        removeTodo,
        completeTodo,
        changeTodoPriority,
        getTodoList,
        getCompletedList
    }
}