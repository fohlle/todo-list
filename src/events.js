import { newProject } from "./dom.js";
import { todoArray, list } from "./test.js";
import { newTodo, domTodo } from "./dom.js";

const array = (() => {
  let arr = todoArray();
  return arr;
})();

let hi;

function projBtn() {
  const ul = document.querySelector(".project_ul");
  const btn = document.getElementById("btn_pro");
  btn.addEventListener("click", (e) => {
    const input = document.getElementById("new_pro");
    if (input.value !== "") {
      const pro = newProject(input.value);
      localStorage.setItem(input.value, input.value);
      ul.appendChild(pro);
      e.preventDefault();
    } else {
      return;
    }
  });
}

function todoBtn(node) {
  const todo = document.querySelector(".todo_c");
  node.addEventListener("click", () => {
    hi = node.parentNode.id;
    todo.style.visibility = "visible";
  });
}

function createTodoBtn() {
  const todo = document.querySelector(".todo_c");
  const btn = document.getElementById("todo_form_btn");
  const inputs = [...document.querySelectorAll(".form_input")];
  btn.addEventListener("click", (e) => {
    const parent = document.getElementById(hi);
    todo.style.visibility = "hidden";
    e.preventDefault();
    let tt = list(
      inputs[0].value,
      inputs[1].value,
      inputs[2].value,
      inputs[3].value
    );
    const arr = array;
    arr.addArray(tt.todo());
    console.log(arr.getArray());
    let div = newTodo(inputs[0].value);
    parent.appendChild(div);
  });
}

function showTodo(node) {
  let arr = array;
  node.addEventListener("click", () => {
    let string = node.innerText.split(" ");
    for (let i = 0; i < arr.getArray().length; i++) {
      if (string[1] === arr.getArray()[i].title) {
        domTodo(arr.getArray()[i]);
      }
    }
  });
}

export { projBtn, todoBtn, createTodoBtn, showTodo, array };
