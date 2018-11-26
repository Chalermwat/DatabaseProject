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
    var temp = document.getElementById("brand_model").value;
    var brand_model = temp.split("_");
    var brand = brand_model[0];
    var model = brand_model[1];
    var member ={
        First_Name: document.getElementById("fname").value,
        Last_Name: document.getElementById("lname").value,
        CID : document.getElementById("CID").value,
        Email:document.getElementById("email").value,
        Tel:document.getElementById("tel").value,
        Address:document.getElementById("address").value,
        Birthday:document.getElementById("birthday").value,
        Number_of_Vehicle:document.getElementById("no_vehicle").value,
        Membership:1,
        Vehicle_ID : document.getElementById("Vehicle_ID").value,
        License_plate : document.getElementById("license").value,
        Brand : brand,
        Model : model,
        Manufacture_Date: document.getElementById("manufacture_date").value,
        Driving_distance : document.getElementById("distance").value,
        Number_of_Services:document.getElementById("no_service").value,
        Last_Checking_Date : document.getElementById("lastCheck").value


    };
    var send_data = JSON.stringify(member);
    console.log(send_data);
    xhttp.send(send_data);
    
    window.location.href = "/";
    alert("Submited!!!");
}