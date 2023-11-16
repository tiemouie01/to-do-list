import Project from "./project.js";
import { viewTodos } from "./console.js";

const myDay = Project('My Day');
myDay.addTodo('Workout','Dumbell Upper Body','16/11/2023','High');
myDay.addTodo('Run errands','Draft traffic management plan.','19/11/2023','Normal');
myDay.addTodo('Shave','Get a fade before leaving for Lilongwe','12/11/2023','Low');

myDay.completeTodo('Run errands');
viewTodos(myDay);

myDay.removeTodo('Workout');
viewTodos(myDay);