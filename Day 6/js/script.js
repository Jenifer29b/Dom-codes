let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let mailid = document.getElementById("email").value

    if (name === "") {
        document.getElementById("errormsg").textContent = "Name Required"
        return
    }
    
    if (password.length < 6 ) {
        document.getElementById("errormsg").textContent = "password must be greater than 6"
        return
        
    }

    if (mailid === "") {
        document.getElementById("errormsg").textContent = "Email id Required"
        return 
    }

    document.getElementById("errormsg").textContent = "Login Successful"
    
    console.log(name)
    console.log(password)

    document.getElementById("name").value = "";
    document.getElementById("password").value = ""
    document.getElementById("email").value = ""

})
