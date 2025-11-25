require('dotenv').config();
let express = require('express');
let app = express();




app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));


var message = "Hello Json".toUpperCase();
app.get("/json", (req, res) => {
  
    if ( process.env.MESSAGE_STYLE === "uppercase") {
      message_data = message_data.toUpperCase();
  }
  
 
res.json({ message: message_data });
});
 


 module.exports = app;
