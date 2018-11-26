var xhttp = new XMLHttpRequest();
var global;
xhttp.onreadystatechange = function(){
    if(this.status==200 && this.readyState==4){
        var data = JSON.parse(this.responseText);
        global = data;
        //document.getElementById("list").innerHTML = data[0].account_number+data[0].balance;
        /*for(var item=0;item<data.length;item++){
            var row = document.createElement("span");
            var col = [];
            for (var i = 0; i < 6; i++) col.push(document.createElement("div"));
            col[0].innerHTML = data[item].account_number;
            col[1].innerHTML = data[item].branch_name;
            col[2].innerHTML = data[item].balance;
            for (var i = 0; i < 6; i++) row.appendChild(col[i]);
            document.getElementById("list").appendChild(row);
        }*/

        /*document.write('<table style="width:100%">');
        document.write("<tr>");
            document.write("<th>"+"ID"+"</th>");
            document.write("<th>"+"First_Name"+"</th>");
            document.write("<th>"+"Last_Name"+"</th>");
            document.write("<th>"+"Email"+"</th>");
            document.write("<th>"+"Tel"+"</th>");
            document.write("<th>"+"Address"+"</th>");
            document.write("<th>"+"Birthday"+"</th>");
            document.write("<th>"+"Membership"+"</th>");
            document.write("<th>"+"Number_of_Vehicle"+"</th>");
        document.write("</tr>");
        for (var item=0; item < data.length; item++) {
            document.write("<tr>");
            document.write("<th>"+data[item].ID+"</th>");
            document.write("<th>"+data[item].First_Name+"</th>");
            document.write("<th>"+data[item].Last_Name+"</th>");
            document.write("<th>"+data[item].Email+"</th>");
            document.write("<th>"+data[item].Tel+"</th>");
            document.write("<th>"+data[item].Address+"</th>");
            document.write("<th>"+data[item].Birthday+"</th>");
            document.write("<th>"+data[item].Membership+"</th>");
            document.write("<th>"+data[item].Number_of_Vehicle+"</th>");
            document.write("</tr>");
        }
        document.write("</table>");*/

        //document.write("<th>"+data[item].ID+"</th>");
        /*var txt="";
        txt+='<table style="width:100%">';
        txt+="<tr>";
        txt+="<th>"+"ID"+"</th>";
        txt+="<th>"+"First_Name"+"</th>";
        txt+="<th>"+"Last_Name"+"</th>";
        txt+="<th>"+"Email"+"</th>";
        txt+="<th>"+"Tel"+"</th>";
        txt+="<th>"+"Address"+"</th>";
        txt+="<th>"+"Birthday"+"</th>";
        txt+="<th>"+"Membership"+"</th>";
        txt+="<th>"+"Number_of_Vehicle"+"</th>";
        txt+="</tr>";
        for (var item=0; item < data.length; item++) {
            txt+="<tr>";
            txt+="<th>"+data[item].ID+"</th>";
            txt+="<th>"+data[item].First_Name+"</th>";
            txt+="<th>"+data[item].Last_Name+"</th>";
            txt+="<th>"+data[item].Email+"</th>";
            txt+="<th>"+data[item].Tel+"</th>";
            txt+="<th>"+data[item].Address+"</th>";
            txt+="<th>"+data[item].Birthday+"</th>";
            txt+="<th>"+data[item].Membership+"</th>";
            txt+="<th>"+data[item].Number_of_Vehicle+"</th>";
            txt+="</tr>";
        }
        txt+="</table>";
        document.getElementById("list").innerHTML = txt;*/

        for (var item=0; item < data.length; item++) {
            var row=document.createElement("tr");
            row.setAttribute("id","row");
            var col=new Array();
            for(var i=0;i<9;i++) col.push(document.createElement("td"));
            col[0].innerHTML = data[item].ID;
            col[1].innerHTML = data[item].First_Name;
            col[2].innerHTML = data[item].Last_Name;
            col[3].innerHTML = data[item].Email;
            col[4].innerHTML = data[item].Tel;
            col[5].innerHTML = data[item].Address;
            col[6].innerHTML = data[item].Birthday;
            col[7].innerHTML = data[item].Membership;
            col[8].innerHTML = data[item].Number_of_Vehicle;
            col.push(document.createElement("button"));
            col[9].type = "button";
            col[9].className = "btn btn-primary";
            col[9].innerHTML = "edit";
            col[9].setAttribute("onclick","edit("+data[item].ID+")");
            col.push(document.createElement("button"));
            col[10].type="button";
            col[10].className = "btn btn-danger";
            col[10].innerHTML="Delete";
            col[10].setAttribute("onclick","del("+data[item].ID+")");
            for(var i=0;i<11;i++) row.appendChild(col[i]);
            document.getElementById("list").appendChild(row);
        }    
    }

};
xhttp.open("GET","/view",true);
xhttp.send();

function edit(item){
    document.getElementById("edit").innerHTML = "God is going to edit data"+item;
}

function del(item){
    console.log(item);
    //alert("GOd is going to delete");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            //do nothing
        }
    }
    xhttp.open("POST","/delete",true);
    xhttp.setRequestHeader("Content-type","application/json");
    var temp = {
        ID:item
    };
    var send_data = JSON.stringify(temp);
    //console.log(temp);
    xhttp.send(send_data);
    //document.getElementById("delete").innerHTML = "God is going to delete data"+item;
    window.location.href = "/admin";
    alert("Data Deleted");
    
}

function LogOut(){
    window.location.href = "/";
}

function add(){
    document.getElementById("add").innerHTML = "God is going to add data";
    window.location.href = "/signup";
}

function search(){
    //document.getElementById("add").innerHTML = "God is search to add data";
    
    var xhttp=new XMLHttpRequest();
    xhttp.open("post","/search",true);
    xhttp.setRequestHeader("Content-type","application/json");
    var search ={
        First_Name:document.getElementById("search_field").value
    };
    var send_data = JSON.stringify(search);
    xhttp.send(send_data);
    console.log("Done search");

    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            console.log("Hello");
            var data = JSON.parse(this.responseText);
            for(var item=0;item<data.length;item++){
                console.log(data[item].ID);
                var row=document.createElement("tr");
                row.setAttribute("id","row");
                var col=new Array();
                for(var i=0;i<9;i++) col.push(document.createElement("td"));
                col[0].innerHTML = data[item].ID;
                col[1].innerHTML = data[item].First_Name;
                col[2].innerHTML = data[item].Last_Name;
                col[3].innerHTML = data[item].Email;
                col[4].innerHTML = data[item].Tel;
                col[5].innerHTML = data[item].Address;
                col[6].innerHTML = data[item].Birthday;
                col[7].innerHTML = data[item].Membership;
                col[8].innerHTML = data[item].Number_of_Vehicle;
                col.push(document.createElement("button"));
                col[9].type = "button";
                col[9].innerHTML = "edit";
                col[9].setAttribute("onclick","edit("+data[item].ID+")");
                col.push(document.createElement("button"));
                col[10].type="button";
                col[10].innerHTML="Delete";
                col[10].setAttribute("onclick","del("+data[item].ID+")");
                for(var i=0;i<11;i++) row.appendChild(col[i]);
                document.getElementById("list").appendChild(row);
            }
        }
    }
}

function deletetable(){
    var parent = document.getElementById("list");
}

/*document.write('<table style="width:100%">');
        document.write("<tr>");
            document.write("<th>"+ID+"</th>");
            document.write("<th>"+First_Name+"</th>");
            document.write("<th>"+Last_Name+"</th>");
            document.write("<th>"+Email+"</th>");
            document.write("<th>"+Tel+"</th>");
            document.write("<th>"+Address+"</th>");
            document.write("<th>"+Birthday+"</th>");
            document.write("<th>"+Membership+"</th>");
            document.write("<th>"+Number_of_Vehicle+"</th>");
        document.write("</tr>");
        for (var item=0; item < data.length; item++) {
            document.write("<tr>");
            document.write("<th>"+data[item].ID+"</th>");
            document.write("</tr>");
        }
        document.write("</table>"); */