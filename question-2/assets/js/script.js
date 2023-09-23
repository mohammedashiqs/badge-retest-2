


function formHandler() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value

    if(name.length===0){
        document.getElementById("errorName") = "Please enter a name"
        document.getElementById("errorName").style.color = "#fff"
        if(email.length < 3 || email.length > 15){
            document.alert("Please enter a name");
        }
    }
    
}


function focusName() {
    document.getElementById("name").style.boxShadow = "0px 0px 8px 1px #f57676"
}
function focusAge() {
    document.getElementById("age").style.boxShadow = "0px 0px 8px 1px #f57676"
}
function focusEmail() {
    document.getElementById("email").style.boxShadow = "0px 0px 8px 1px #f57676"
}