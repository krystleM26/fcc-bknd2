console.log("Hello World");

let express = require('express');
let app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static("/public", express.static(__dirname + "/public/styles.css")));


































 module.exports = app;
