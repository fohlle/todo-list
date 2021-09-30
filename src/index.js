import "./style.css"
import { test, list, listConst, listClass, todoArray } from "./test.js"
import { newProject, newTodo  } from "./dom.js"
import { projBtn, todoBtn, createTodoBtn } from "./events.js"

const btn = document.querySelector(".btn_todo");
todoBtn(btn);
projBtn();
createTodoBtn();



//title, description, dueDate and priority. 
// You might also want to include notes or even a 
// checklist.