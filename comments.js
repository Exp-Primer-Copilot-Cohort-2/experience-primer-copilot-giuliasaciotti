// Create web server
// Create web server
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/comment.html', function (req, res) {
   res.sendFile( __dirname + "/" + "comment.html" );
});

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
       name:req.body.name,
       comment:req.body.comment
   };
   console.log(response);
   fs.readFile( __dirname + "/" + "comment.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data.push(response);
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port);
})