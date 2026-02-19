let details = {
    name: "ruban",
    place: "madurai",
    job : "accountant"
}
console.log(details)
let jsonvalue = JSON.stringify(details)
console.log("Obj to json : ", jsonvalue)
console.log("json to obj", JSON.parse(jsonvalue))

let array = ["apple", "banana", 21, 18]
console.log(array)
console.log("array to json", JSON.stringify(array))

let objarray = [
    {
      name : "ruban",place : "madurai"
    }, {
        name : "jeni",place : "chennai"
    }
]
console.log(objarray)
console.log(JSON.stringify(objarray))

const user = {
  name: "Jenifer",
  age: 22,
  skills: ["HTML", "CSS", "JS"]
}

let data = JSON.stringify(user)
console.log(data)
localStorage.setItem("userinfo", data)
console.log("data stored")

let div = document.createElement("div")
div.setAttribute("id", "userinfo")
div.textContent =data
document.body.append(div)