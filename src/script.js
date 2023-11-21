import Project from "./project";
import { viewProject } from "./interface";
import "./style.css";

const myDay = Project("My Day");
myDay.addTodo("Shave", "Get cut", "23/11/2023", "HIGH");
myDay.addTodo("Test project", "Get it working", "21/11/2023", "HIGH");

viewProject(myDay);
