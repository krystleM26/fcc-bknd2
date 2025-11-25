require('dotenv').config();
let express = require('express');
let app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

var response = "Hello json";
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "respomse": response.toUpperCase() });
   
  } else {
    response = response.message;
  }
  
});
 


 module.exports = app;
