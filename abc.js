var express = require('express');
var app = express();

var empController=function(req, res){
  console.log(" emp list");
  var emplyee = [
    {empid:1, name:"amardeep",dob:"16-03-1996",phoneno:13245, position:"manager"},
    {empid:2, name:"vishnu",dob:"22-03-1996",phoneno:45789, position:"devloper"},
   
  ];
  res.send(emplyee);
};
app.get ('/emplyee',empController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(" http://localhost:8086", host, port)
})