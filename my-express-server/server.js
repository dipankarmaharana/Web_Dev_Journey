const express = require('express');

const app = express();

app.get("/", function(request, response){
    response.send("Hello");
})

app.get("/contact", function(req,res){
    res.send("Contact me at 100");
})

app.get("/about", function(req,res){
    res.send("I am anonymous");
})

app.get("/hobby", function(req,res){
    res.send("Browsing stuffs on Google.");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});