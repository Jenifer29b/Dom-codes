let ul = document.createElement("ul")
ul.setAttribute("id", "mylist")

document.body.appendChild(ul)

let items = ["Apple","Banana", "Guava", "kiwi", "Orange","blueberry"]

items.forEach((item) => {
    let li = document.createElement("li")
    li.textContent = item
    ul.appendChild(li)
})
ul.remove()

let ul1 = document.createElement("ul")
ul1.setAttribute("id","list1")
document.body.appendChild(ul1)

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    if(ul1.firstElementChild) {
        ul1.firstElementChild.remove()
    }
})


btn1.addEventListener("click", () => {
    let item = document.getElementById("txt").value
    let li = document.createElement("li")
    if (item.trim().length===0) {
        console.log("item needed")
        return
    } 
        li.textContent = item
    
    ul1.appendChild(li)
    console.log("item added", item)
    
    document.getElementById("txt").value = "";
})
