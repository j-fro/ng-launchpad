var express = require('express');
var path = require('path');

var app = express();

var port = 8000;

app.listen(port, function() {
    console.log('Listening on', port);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.use(express.static('public'));
