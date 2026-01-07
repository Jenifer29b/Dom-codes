// dom - document  object Model . it looks like tree like structure .
// each html tag is called as node(object)

// document - represents the entire web page. it is the entry page to access the dom
// all tags are starts with document. 
console.log(document)

// Selecting the elements : 

// It is used to select only one element by using their id. textcontent is used get only one content 
let value = document.getElementById("first")
console.log(value.textContent)

// It is used to select multiple elements by using their classname . 
// we can select by using index number starts with 0
let classvalue = document.getElementsByClassName("one")
console.log(classvalue)
console.log(classvalue[1].textContent)

//select element by Tagname : used to select elements by their tagname

let listvalue = document.getElementsByTagName("li")
console.log(listvalue.length)

// queryselecter :returns first matching element .returns single element 

let queryvalue = document.querySelector(".one")
console.log(queryvalue.textContent)

//queryselectorall : returns all matching elements

let allvalue = document.querySelectorAll(".one")

allvalue.forEach((element) => {
    console.log(element.textContent)
})