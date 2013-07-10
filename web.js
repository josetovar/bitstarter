var fs = required('fs'),
    express = require('express'),
    app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('./index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
