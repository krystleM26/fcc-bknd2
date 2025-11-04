console.log("Hello World");

let express = require('express');
let app = express();


app.get('/', (req, res) => {
  res.send(__dirname + '/public/views/index.html');
});


































 module.exports = app;
