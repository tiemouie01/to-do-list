import { logMessage } from "./console.js";

export default function ToDo(title, description, dueDate, priority) {
    let note = '';
    
    const setPriority = (value) => priority = value;

    const addNote = (value) => {
        if (note.length > 1000) {
            logMessage('Notes cannot contain more than 1000 characters');
        }
        note = value;
    }

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNote = () => note;

    return {
        addNote,
        setPriority,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getNote,
    };
}