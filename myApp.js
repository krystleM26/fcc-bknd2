require('dotenv').config();
let express = require('express');
let app = express();




app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));


var message = "Hello json";
app.get("/json", (req, res) => {
  if  (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  } else {
    message = "Hello JSON";
  }

    res.json({ 
      message: "message" }); // Corrected 'messange' to 'message'
  
});
 


 module.exports = app;
