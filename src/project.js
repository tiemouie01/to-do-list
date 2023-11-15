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
        const index = todos.findIndex(todo => todo === title);
        todos.splice(index,1);
    }

    const completeTodo = (title) => {
        const index = todos.findIndex(todo => todo === title);
        completedTodos.push(todos.splice(index,1)[0]);
    }
}