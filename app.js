const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function() {
    console.log("Server started success");
});