// dom - document  object Model . it looks like tree like structure .
// each html tag is called as node(object)

// document - represents the entire web page. it is the entry page to access the dom
// all tags are starts with document. 
console.log(document)

// It is used to select only one element by using their id. textcontent is used get only one content 
let value = document.getElementById("first")
console.log(value.textContent)

let classvalue = document.getElementsByClassName("one")
console.log(classvalue)
console.log(classvalue[1].textContent)

