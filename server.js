var express = require("express");
var path = require("path");
var mysql = require("mysql");
var parser = require("body-parser");
var app=express();

//init
app.use(parser.json());
app.use(express.static(__dirname));

//Connect to Database
var connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0818382079",
    database: "GoodBoiGoodCar"
});

//Test Database
/*var data;
connection.connect(function(err){
    if(err) throw err;
    connection.query("select * from customer",function(err,result,field){
        if(err) throw err;
        data = result;
        //console.log(JSON.stringify(result));
    });
});*/

app.get("/view",function(req,res){
    console.log("Admin views member lists");
    var q = 'select * from customer';
    connection.query(q,function(err,result,field){
        if(err) throw err;
        res.setHeader("Content-type","application/json");
        //console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
})

app.get("/view_reserve",function(req,res){
    console.log("Admin views member lists");
    var q = 'select R.Reservation_ID,R.Service_type,R.Branch_ID,R.Time,R.License_plate,C.First_Name from reservation R,vehicle V,customer C where R.License_plate=V.License_plate and V.Customer_ID=C.ID;';
    connection.query(q,function(err,result,field){
        if(err) throw err;
        res.setHeader("Content-type","application/json");
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
})

app.post("/editdata",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "UPDATE `goodboigoodcar`.`customer` SET `ID` = '"+inp.CID+"', `First_Name` = '"+inp.First_Name+"', `Last_Name` = '"+inp.Last_Name+"', `Email` = '"+inp.Email+"', `Tel` = '"+inp.Tel+"', `Address` = '"+inp.Address+"', `Birthday` = '"+inp.Birthday+"', `Membership` = '"+inp.Membership+"', `Number_of_Vehicle` = '"+inp.Number_of_Vehicle+"' WHERE (`ID` = '"+inp.Old_CID+"')"
    connection.query(q);
    console.log("Edited");
});

app.post("/edit",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q ="select * from customer where ID='"+inp.ID+"'";
    connection.query(q,function(err,result){
        if(err) throw err;
        res.setHeader("Content-type","application/json");
        console.log(JSON.stringify(result));
        res.json(result);
    });
});

app.post("/applymembership",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "INSERT INTO `goodboigoodcar`.`customer` (`ID`,`First_Name`, `Last_Name`, `Email`, `Tel`, `Address`, `Birthday`, `Membership`, `Number_of_Vehicle`) VALUES ('"+inp.CID+"','"+inp.First_Name+"', '"+inp.Last_Name+"', '"+inp.Email+"', '"+inp.Tel+"', '"+inp.Address+"', '"+inp.Birthday+"', '1', '"+inp.Number_of_Vehicle+"')"
    connection.query(q,function(err,result){
        console.log(result);
    });
    var q = "INSERT INTO `goodboigoodcar`.`vehicle` (`Vehicle_ID`, `License_plate`, `Brand`, `Model`, `Last_Checking_Date`, `Number_of_Services`, `Manufacture_Date`, `Driving_distance`, `Customer_ID`) VALUES ('"+inp.Vehicle_ID+"', '"+inp.License_plate+"', '"+inp.Brand+"', '"+inp.Model+"', '"+inp.Last_Checking_Date+"', '"+inp.Number_of_Services+"', '"+inp.Manufacture_Date+"', '"+inp.Driving_distance+"', '"+inp.CID+"')";
    connection.query(q,function(err,result){
        if(err) throw err;
        console.log(result);
        res.sendFile(path.join(__dirname+"/HTML/login.html"));
    });
    console.log("Insert to query");
})

app.post("/search_name",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "select * from customer where First_Name='"+inp.First_Name+"'";
    connection.query(q,function(err,result,field){
        if(err) throw err;
        console.log(result);
        res.setHeader("Content-type","application/json");
        res.send(JSON.stringify(result));
    })
})

app.post("/search_id",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "select * from customer where ID='"+inp.ID+"'";
    connection.query(q,function(err,result,field){
        if(err) throw err;
        console.log(result);
        res.setHeader("Content-type","application/json");
        res.send(JSON.stringify(result));
    })
})

app.post("/delete",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "delete from customer where ID='"+inp.ID+"'";
    connection.query(q);
    console.log("Delete Data from query");
})

app.get("/",function(req,res){
    console.log("Going to Log in page");
    res.sendFile(path.join(__dirname+"/HTML/login.html"));
    //res.send(JSON.stringify(data));
});

app.get("/member",function(req,res){
    console.log("Going to Member page");
    res.sendFile(path.join(__dirname+"/HTML/member.html"));
});

app.get("/admin",function(req,res){
    console.log("Going to Admin page");
    res.sendFile(path.join(__dirname+"/HTML/admin.html"));
});

app.get("/signup",function(req,res){
    console.log("Going to SignUp page");
    res.sendFile(path.join(__dirname+"/HTML/signup.html"));
})

app.get("/editdata",function(req,res){
    console.log("Going to edit page");
    res.sendFile(path.join(__dirname+"/HTML/editdata.html"));
})

app.get("/admin_reserve",function(req,res){
    console.log("Going to reservation page");
    res.sendFile(path.join(__dirname+"/HTML/admin_reserve.html"));
})


app.listen(8080);