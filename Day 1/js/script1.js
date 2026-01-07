// these are for reading the contents of elements innertext,textcontent and innerHtml
let value1 = document.getElementsByClassName("one")
console.log(value1[0].innerText)

let oneofone = document.getElementsByClassName("one")
console.log(oneofone[1].textContent)

let value2 = document.getElementsByClassName("fruit")
value2[0].innerHTML = "<b>Mango</b>"
console.log(value2[0].innerHTML)

let value3 = document.getElementsByClassName("two")
value3[0].textContent = "change using textcontent in classname two"
console.log(value3[0].textContent)

// getting the attributes values :

let att1 = document.getElementById("div1")
console.log(att1.id)
console.log(att1.setAttribute("id","id1")) // change the attribute
console.log(att1.getAttribute("id"))
console.log(att1.removeAttribute("id")) // remove the attribute
console.log(att1.getAttribute("id"))

let att2 = document.getElementById("name")
console.log(att2.value)