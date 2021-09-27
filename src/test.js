
function test(){
  console.log("what testing")
}

const list = (title,description,due,priority) => {

  let notes = "";
  let check = false;
  
  const todo = () => {
    return { title, description, due, priority, notes, check};
  }

  const setNotes = (note) => notes = note;
  const setCheck = () => check = true;

  return { todo, setNotes, setCheck};
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

export  { test, list, listConst, listClass };
