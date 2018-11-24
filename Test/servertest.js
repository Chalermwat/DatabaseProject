var express = require("express");
var app = express();
var path = require("path");
var parser = require("body-parser");
app.use(express.static(__dirname));
app.use(parser.json());
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/testxml.html"));

});

app.post("/update",function(req,res){
    var temp = req.body;
    console.log(temp);
});

app.listen(8080);