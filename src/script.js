import Project from "./project";
import { viewProject } from "./interface";
import "./style.css";

// Create presets
const myDayProject = Project("My Day");
const importantProject = Project('Important');
const groceriesProject = Project('Groceries');
const tasksProject = Project('Tasks');

myDayProject.addTodo("Shave", "Get cut", "23/11/2023", "HIGH");
myDayProject.addTodo("Test project", "Get it working", "21/11/2023", "HIGH");

viewProject(myDayProject);
