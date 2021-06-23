var http = require('http');
var dateUtil = require('./date');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write(`YooHoo NodeJs. Current Date - ${dateUtil.currentDate()}`);
    res.end();
}).listen(8000);

// http.createServer(function(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.write(
//         `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Document</title>
//             </head>
//             <body>
//                 Hello World!
//             </body>
//             </html>
//         `
//     );
//     res.end();
// }).listen(8000);


// http.createServer(function(req, res){
//     res.writeHead(200, { 'Content-Type': 'application/json'});
//     res.write(JSON.stringify({
//         name: "Chirag Goel",
//         place: "Bangalore"
//     }));
//     res.end();
// }).listen(8000);