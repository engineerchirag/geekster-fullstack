var http = require('http');
var fs = require('fs');


function getPath(url) {
    var finalPath = __dirname + '/build';
    var path = url.split('/')[1] || '';
    switch(path) {
        case 'css':
        case 'js':
        case 'static':
        case 'fonts':
        case 'images': {
            finalPath += url;
            break;
        }
        default: {
            finalPath += '/index.html';
            break;
        }
    }
    console.log('----', path, finalPath);
    return finalPath;
}


http.createServer(function(req, res){
    fs.readFile(getPath(req.url), function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8012);