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
        res.send(result);
    })
})

app.post("/editdata",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "UPDATE `goodboigoodcar`.`customer` SET `ID` = '"+inp.CID+"', `First_Name` = '"+inp.First_Name+"', `Last_Name` = '"+inp.Last_Name+"', `Email` = '"+inp.Email+"', `Tel` = '"+inp.Tel+"', `Address` = '"+inp.Address+"', `Birthday` = '"+inp.Birthday+"', `Membership` = '"+inp.Membership+"', `Number_of_Vehicle` = '"+inp.Number_of_Vehicle+"' WHERE (`ID` = '"+inp.CID+"')"
    connection.query(q);
    console.log("Edited");
});
app.post("/applymembership",function(req,res){
    var inp=req.body;
    console.log(inp);
    var q = "INSERT INTO `goodboigoodcar`.`customer` (`ID`,`First_Name`, `Last_Name`, `Email`, `Tel`, `Address`, `Birthday`, `Membership`, `Number_of_Vehicle`) VALUES ('"+inp.CID+"','"+inp.First_Name+"', '"+inp.Last_Name+"', '"+inp.Email+"', '"+inp.Tel+"', '"+inp.Address+"', '"+inp.Birthday+"', '1', '"+inp.Number_of_Vehicle+"')"
    connection.query(q,function(err,result){
        if(err) res.sendFile(path.join(__dirname+"/HTML/login.html"));
    });
    console.log("Insert to query");
})

app.all("/search",function(req,res){
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


app.listen(8080);