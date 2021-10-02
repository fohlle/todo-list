import "./style.css";
import { newProject } from "./dom.js";
import { projBtn, todoBtn, createTodoBtn } from "./events.js";

const btn = document.querySelector(".btn_todo");
todoBtn(btn);
projBtn();
createTodoBtn();

console.log(window.localStorage);

for (let i in localStorage) {
  if (localStorage.getItem(i)) {
    const ul = document.querySelector(".project_ul");
    let proj = newProject(localStorage.getItem(i));
    ul.appendChild(proj);
  }
}

localStorage.clear();

//title, description, dueDate and priority.
// You might also want to include notes or even a
// checklist.
