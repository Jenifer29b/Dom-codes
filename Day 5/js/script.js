//When an event happens on an element, it first runs on that element, then bubbles up through its ancestors.
// it is called as event bubbling

//event.target :The actual element that triggered the event
//event.currentTarget : The element the listener is attached to

document.getElementById("list").addEventListener("click", (e) => {
    console.log("ul clicked")
    console.log("current",e.currentTarget)
    console.log("target",e.target)
})

document.getElementById("mylist").addEventListener("click", () => {
    console.log("Li clicked")
    
})

//Dynamic Handling :

document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.matches("li")) {
         alert(e.target.textContent)
     }
 })


document.getElementById("addbtn").addEventListener("click", () => {
    let li = document.createElement("li")
    li.textContent = document.getElementById("txt").value
    document.getElementById("list").append(li)
})

// event Delegation :Event delegation is attaching a single event listener to a parent element
// to handle events for its child elements using event bubbling.

document.getElementById("btns").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("button Clicked", e.target.textContent)
        console.log(e)
    }
})