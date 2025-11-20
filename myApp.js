

let express = require('express');
require('dotenv').config();
let app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({
  message: process.env.MESSAGE_STYLE === "uppercase"
   ? message.toUpperCase()
    : message
  });
});  

































 module.exports = app;
