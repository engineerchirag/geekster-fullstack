// API: https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5

const express = require('express');
const request = require('request');
const app = express();


app.get('/news', function (req, res) {
  let url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5`;
  request(url, function (err, response, body) {
    if(err){
      res.send(JSON.stringify(err));
    } else {
      res.set('Content-Type', 'application/json');
      res.send(body);
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});