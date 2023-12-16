import "./style.css";
import { addProjectEvent, viewProject } from "./interface";

// Add necessary project event in the library as well as functionality to the "Add Project" button.
addProjectEvent();

// Load the initial project onto the screen.
viewProject("Today's Todos");

const dailyProject = document.querySelector(".daily-project");
const importantProject = document.querySelector(".important-project");

dailyProject.addEventListener("click", (event) => {
  const projectName = event.target.textContent;
  viewProject(projectName);
});

importantProject.addEventListener("click", (event) => {
  const projectName = event.target.textContent;
  viewProject(projectName);
});
