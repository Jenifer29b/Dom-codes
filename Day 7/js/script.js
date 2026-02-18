localStorage.setItem("name", "jenifer")
let value = localStorage.getItem("name")
console.log(value)


let arr = {
    name: "jeni",
    age: 21,
    place : "chennai"
}
let json = JSON.stringify(arr)
localStorage.setItem("Details", json)
console.log(localStorage.getItem("Details"))
console.log("json to obj",JSON.parse(json))

let todo = document.getElementById("todos")
todo.textContent = localStorage.getItem("Details")


