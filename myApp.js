require('dotenv').config();
let express = require('express');
let app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

var message = 'Hello json';
console.log(message)
app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message }); // Corrected 'messange' to 'message'
  }
});
 


 module.exports = app;
