let heading = document.getElementById("head")
heading.innerText = "Welcome to Day2 of DOM Class"
heading.innerHTML = "<span style = 'color : red'>Welcome to Day2 of DOM Class</span>"
console.log(heading.textContent)

let parag = document.getElementById("para")
parag.style.color = "yellow"
parag.style.backgroundColor = "red"
parag.style.border = "2px solid black"
parag.style.fontSize = "2em"
console.log(parag.textContent)

let parag1 = document.getElementById("para1")
console.log(parag1.textContent)
// parag1.classList.add("p1", "paragh1")
// parag1.classList.remove("paragh1")
parag1.classList.toggle("p1", true)
console.log(document.getElementsByClassName("p1")[0].textContent)

let button = document.getElementById("btn")
button.classList.add("btn1")

button.addEventListener("click", () => {
    alert("button clicked")
    button.innerText = "Button clicked"
})