var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); // 1

var port = process.env.PORT || 3000; // 1
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
