const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { post } = require("request");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
    
})

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.mail;

    var data = {
        members:[
            {
                email_address: email,
                status: "Subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };
    var jsondata = JSON.stringify(data);
    var url = "https://us5.api.mailchimp.com/3.0/lists/cc01edced1"

    const options = {
        method: "POST",
        auth: "Dipankar:82bc492ea9c64fd1a91083d4d9544a8b-us5"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsondata);
    request.end();
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

//api key: 82bc492ea9c64fd1a91083d4d9544a8b-us5
//list id: cc01edced1