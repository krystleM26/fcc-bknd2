console.log("Hello World");

let express = require('express');
let app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('public'));


































 module.exports = app;
