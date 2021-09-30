
function test(){
  console.log("what testing")
}

const todoArray = () =>{
  let array = [];
  const addArray = (arr) => array.push(arr);
  const getArray = () => array;
  return { addArray, getArray};
}

const list = (title,description,due,priority) => {

  let notes = "";
  const todo = () => {
    return { title, description, due, priority, notes};
  }
  const setNotes = (note) => notes = note;

  return { todo, setNotes};
}

function listConst(title,desc){
  this.title = title;
  this.desc = desc;
  this.notes = "";
  this.check = false;
}

class listClass{

  constructor(title,desc){
    this.title = title;
    this.desc = desc;
    this.notes = "";
    this.check = false;
  }
   get title(){
     return this._title;
   }
   set title(value){
     this._title = value;
   }
   set notes(value){
     this._notes = value;
   }
}

export  { test, list, listConst, listClass, todoArray };
