import { logMessage } from "./console";

export default function ToDo(
  title = "",
  description = "",
  dueDate = "",
  priority = "",
) {
  let note = "No note added.";

  const addNote = (value) => {
    if (note.length > 1000) {
      logMessage("Notes cannot contain more than 1000 characters");
    }
    note = value;
  };

  const getNote = () => note;

  return {
    title,
    description,
    dueDate,
    priority,
    addNote,
    getNote,
  };
}
