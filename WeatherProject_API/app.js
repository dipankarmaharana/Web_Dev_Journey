const { json } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req,res){

    const query = req.body.cityName;

    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=140da0923042037bfa3d42ac951aef9c&units=metric#";
    
    https.get(url, function(response){

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            res.send("The temperature is " + temp)
        })
    })
})





app.listen(3000, function(){
    console.log("Server is running at port 3000.");
})