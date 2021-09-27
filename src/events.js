import { newProject } from "./dom.js"

function projBtn(){
  const ul = document.querySelector(".project_ul");
  const btn = document.getElementById("btn_pro");
  btn.addEventListener("click", (e) => {
  const input = document.getElementById("new_pro");
  if(input.value !== ""){
    const pro = newProject(input.value)
    ul.appendChild(pro);
    e.preventDefault();
  }else { return }
})
}

export { projBtn };