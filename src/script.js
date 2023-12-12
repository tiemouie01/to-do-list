import "./style.css";
import { addProjectEvent, viewProject } from "./interface";

// Add necessary project event in the library as well as functionality to the "Add Project" button.
addProjectEvent();

// Load the initial project onto the screen.
viewProject("Today's Todos");
