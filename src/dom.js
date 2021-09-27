
function newProject(string){
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const btn = document.createElement("button");
  btn.className ="btn_todo"
  btn.innerText = "Add Todo";
  li.className = "project";
  h3.innerText = string;
  li.appendChild(h3);
  li.appendChild(btn);
  return li;
}

function newTodo(title){
  const div = document.createElement("div");
  const h4 = document.createElement("h4");

  div.className = "todo";
  h4.innerText = " - " + title;
  div.appendChild(h4);
  return div;
}

export { newProject, newTodo };