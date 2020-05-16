var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 5000;
var app = express();
var path = require("path");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})
