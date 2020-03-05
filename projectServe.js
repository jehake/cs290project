var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.sendFile('./public/home.html', {root: __dirname});
});



app.use(express.static('public'));

app.listen(3141, function() {
  console.log('Example app listening on port 3141!');
});
