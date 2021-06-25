var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Not able to read file');
            res.end();
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    });
}).listen(9010);