const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (!id) {
    alert("Please select item first");
    window.location.href = "/admin";
}
console.log(id);

var old_id=id;
var xhttp = new XMLHttpRequest();
xhttp.open("POST","/edit",true);
xhttp.setRequestHeader("Content-Type","application/json");
var obj={
    ID:id
};
xhttp.send(JSON.stringify(obj));
xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
        var old_data= JSON.parse(this.responseText);
        console.log(old_data);
        document.getElementById("fname").value = old_data[0].First_Name,
        document.getElementById("lname").value = old_data[0].Last_Name,
        document.getElementById("CID").value = old_data[0].ID,
        document.getElementById("email").value = old_data[0].Email,
        document.getElementById("tel").value = old_data[0].Tel,
        document.getElementById("address").value = old_data[0].Address,
        document.getElementById("birthday").value = old_data[0].Birthday,
        document.getElementById("no_vehicle").value = old_data[0].Number_of_Vehicle,
        document.getElementById("membership").value = old_data[0].Membership;
    }
}

// var item = JSON.parse(localStorage.getItem("editItem"));
// if (!item) {
//     alert("Please select item first");
//     window.location.href = "/";
// }
// localStorage.removeItem("editItem");

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
        Old_CID: old_id
    };
    var send_data = JSON.stringify(member);
    console.log(send_data);
    xhttp.send(send_data);
    
    window.location.href = "/admin";
    alert("Done!!!");
}