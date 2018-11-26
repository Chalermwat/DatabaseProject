var xhttp = new XMLHttpRequest();
var old_data;
xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
        old_data= JSON.parse(this.responseText);
        document.getElementById("fname").value = old_data.First_Name,
        document.getElementById("lname").value = old_data.Last_Name,
        document.getElementById("CID").value = old_data.ID,
        document.getElementById("email").value = old_data.Email,
        document.getElementById("tel").value = old_data.Tel,
        document.getElementById("address").value = old_data.Address,
        document.getElementById("birthday").value = old_data.Birthday,
        document.getElementById("no_vehicle").value = old_data.Number_of_Vehicle,
        document.getElementById("membership").value = old_data.Membership;
    }
}
xhttp.open("GET","/edit",true);
xhttp.send();

function back(){
    window.location.href="/admin";
}

function submit(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            //do nothing
        }
    }
    xhttp.open("POST","/editdata");
    xhttp.setRequestHeader("Content-Type","application/json");
    var member ={
        First_Name: document.getElementById("fname").value,
        Last_Name: document.getElementById("lname").value,
        CID : document.getElementById("CID").value,
        Email:document.getElementById("email").value,
        Tel:document.getElementById("tel").value,
        Address:document.getElementById("address").value,
        Birthday:document.getElementById("birthday").value,
        Number_of_Vehicle:document.getElementById("no_vehicle").value,
        Membership:document.getElementById("membership").value,
        Old_CID: old_data.ID
    };
    var send_data = JSON.stringify(member);
    console.log(send_data);
    xhttp.send(send_data);
    
    window.location.href = "/admin";
    alert("Done!!!");
}