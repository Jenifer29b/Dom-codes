let todolist = document.getElementById("list");

let addbtn = document.getElementById("add");

let todos = JSON.parse(localStorage.getItem("Todo")) || [];

function rendertodos() {
    todolist.innerHTML = ""
    todos.forEach((todo) => {
    let li = document.createElement("li");
    li.textContent = `${todo.Taskname} - ${todo.Status}`;
        todolist.append(li);
        
    let delbtn = document.createElement("button")
    delbtn.textContent = "Delete"
    delbtn.setAttribute("id","btn1")
    todolist.append(delbtn)
        
    delbtn.addEventListener("click", () => {
        li.remove()
        
 })


  });
}
rendertodos();

addbtn.addEventListener("click", () => {
  let input = document.getElementById("task").value;

    let status = document.getElementById("status").value;
    

  if (input === "") {
    alert("all required");
    return;
    }
    


  let newtask = {
    Taskname: input,
      Status: status,
  };

  todos.push(newtask);
  localStorage.setItem("Todo", JSON.stringify(todos));

  let li = document.createElement("li");
  li.textContent = `${newtask.Taskname} - ${newtask.Status}`;
  todolist.append(li);
    
    

    


  document.getElementById("task").value = "";
  document.getElementById("status").value = "";
});


let btn2 = document.getElementById("toggle")

btn2.addEventListener("click", () => {
    document.getElementById("body").classList.toggle("togglebtn")
    

})

let knownstatus = document.getElementById("status1")
let showstatus = document.getElementById("showstatus")

 knownstatus.addEventListener("change", (event) => {
   let value = event.target.value
   showstatus.textContent = value
  console.log(value)
  
})

