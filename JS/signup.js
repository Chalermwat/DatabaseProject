function back(){
    window.location.href="/";
}

function submit(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            //do nothing
        }
    }
    xhttp.open("POST","/applymembership");
    xhttp.setRequestHeader("Content-Type","application/json");
    var member ={
        First_Name: document.getElementById("fname").value,
        Last_Name: document.getElementById("lname").value,
        Email:document.getElementById("email").value,
        Tel:document.getElementById("tel").value,
        Address:document.getElementById("address").value,
        Birthday:document.getElementById("birthday").value,
        Number_of_Vehicle:document.getElementById("no_vehicle").value,
        Membership:1
    };
    var send_data = JSON.stringify(member);
    console.log(send_data);
    xhttp.send(send_data);
    
    window.location.href = "/";
    alert("Submited!!!");
}