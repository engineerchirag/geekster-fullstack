// API: https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5

const { Router } = require('express');
const express = require('express');
const app = express();
const request = require('request');

app.get('/', function(req, res) {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
          fetch('https://www.google.co.in/complete/search?q=chirag&cp=6&client=gws-wiz&xssi=t&gs_ri=gws-wiz&hl=en-IN&authuser=0&psi=tY3cYO26BdPgrQHmjZ_ABg.1625066933780&dpr=2').then(data => console.log(data));
      </script>
  </head>
  <body>
      CORS demo
  </body>
  </html>
  `);
});
app.get('/news', function (req, res) {
    let page = req.query.page || 1;
    const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=${page}`;
    request(url, function(err, response, body) {
      if (err) {
        res.send(err);
      } else {
        res.set('Content-Type', 'application/json');
        res.send(body);
      }
    });
});

app.get('/products/:productId', function(req, res) {
  // Get product detail
});

app.get('/products', function(req, res) {
  // Get product
});

app.get('/carts/items', function(req, res) {
  // Get cart item list
});

app.get('/carts/add-item', function(req, res) {
  // Add item to cart
});

app.get('/carts/update-item', function(req, res) {
  // Update item to cart
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});