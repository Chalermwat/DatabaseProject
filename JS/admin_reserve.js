function back(){
    window.location.href  = "/admin";
}

function LogOut(){
    window.location.href = "/";
}

var xhttp = new XMLHttpRequest();
var global;
var col = [];
var cols = [];
xhttp.onreadystatechange = function(){
    if(this.status==200 && this.readyState==4){
        var data = JSON.parse(this.responseText);
        //console.log(JSON.parse(this.responseText));
        global = data;
        console.log(data);
        for (c of cols) {
            c.parentNode.removeChild(c);
        }
        cols = [];
        for (var item=0; item < data.length; item++) {
            var row=document.createElement("tr");
            row.setAttribute("id","row");
            col=new Array();
            for(var i=0;i<6;i++) col.push(document.createElement("td"));
            col[0].innerHTML = data[item].Reservation_ID;
            col[1].innerHTML = data[item].Service_type;
            col[2].innerHTML = data[item].Branch_ID;
            col[3].innerHTML = data[item].Time;
            col[4].innerHTML = data[item].License_plate;
            col[5].innerHTML = data[item].First_Name;
            // col.push(document.createElement("button"));
            // col[9].type = "button";
            // col[9].className = "btn btn-primary";
            // col[9].innerHTML = "edit";
            // col[9].setAttribute("onclick","edit('"+data[item].ID+"')");
            // col.push(document.createElement("button"));
            // col[10].type="button";
            // col[10].className = "btn btn-danger";
            // col[10].innerHTML="Delete";
            // col[10].setAttribute("onclick","del('"+data[item].ID+"')");
            //console.log(data[item].ID);
            for(var i=0;i<6;i++) row.appendChild(col[i]);
            document.getElementById("list").appendChild(row);
            cols.push(row);
        }    
    }

};
xhttp.open("GET","/view_reserve",true);
xhttp.send();