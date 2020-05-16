var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 5000;
var app = express();
var path = require("path");

app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/home_page.html'));
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})
