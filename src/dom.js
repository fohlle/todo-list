import { todoBtn, showTodo } from "./events.js";

function newProject(string) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const btn = document.createElement("button");
  btn.className = "btn_todo";
  btn.innerText = "Add Todo";
  li.className = "project";
  li.id = string;
  h3.innerText = string;
  li.appendChild(h3);
  li.appendChild(btn);
  todoBtn(btn);
  return li;
}

function newTodo(title) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");

  div.className = "todo";
  h4.innerText = " - " + title;
  showTodo(h4);
  div.appendChild(h4);
  return div;
}

function domTodo(object) {
  const title = document.getElementById("title");
  const due = document.getElementById("due");
  const desc = document.getElementById("desc");
  const prio = document.getElementById("prio");
  const notes = document.getElementById("notes");

  const list = [...document.querySelectorAll(".showTodoLi")];
  list.forEach((node) => {
    if (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
  });

  const p1 = document.createElement("p");
  p1.innerText = object["title"];
  const p2 = document.createElement("p");
  p2.innerText = object["due"];
  const p3 = document.createElement("p");
  p3.innerText = object["description"];
  const p4 = document.createElement("p");
  p4.innerText = object["priority"];
  const p5 = document.createElement("p");
  p5.innerText = object["notes"];

  title.appendChild(p1);
  due.appendChild(p2);
  desc.appendChild(p3);
  prio.appendChild(p4);
  notes.appendChild(p5);
}

export { newProject, newTodo, domTodo };
