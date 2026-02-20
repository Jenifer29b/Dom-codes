let data1 = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Http error" + res.status);
    }

    return res.json();
  })

  .then((data) => {
    data.forEach((element) => {
        console.log("names : ", element.name);
        // console.log("email :",element.email)
    });
  })
  .catch((err) => console.log("error message", err));

// here this console exceuts first because fetch is an async function and returned a promise,
// so it takes time until below
console.log("value of data", data1);


function getposts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => console.log(data[0].title))
        .catch((err) => err)
    
    
}
getposts()

async function gettodos() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()
        console.log(data[0])

        let div = document.createElement("div")
        div.textContent = JSON.stringify(data[0])
        document.getElementById("getvalue").append(div)

        
    } catch (error) {
        console.log(error)
    }
}
gettodos()



fetch("https://jsonplaceholder.typicode.com/users",{
    method: "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        id: 11,
        name: "xxxx",
        place: "yyyy"
    }) 
})
    .then((res) => res.json())
    .then((data)=>console.log("Data added",data))

fetch("https://699709d07d17864365762336.mockapi.io/user/users", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        id: 0,
        name: "xxxx",
        place : "yyyy"
    })
})  
    .then((res) => res.json())
.then((data)=> console.log("data added"))
 