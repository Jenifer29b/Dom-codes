let btn = document.getElementById("btn1")

btn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Form Submitted")
    document.getElementById("txt").value = ""
    console.log("button clicked",event.target)
})

let input = document.getElementById("txt")

input.addEventListener("input", () => {
    console.log(input.value)
})

input.addEventListener("select", () => {
    input.style.background = "black"
    input.style.color = "white"
})

document.addEventListener("keydown", (e) => {
    console.log(e.key)
})