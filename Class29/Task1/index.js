const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/check-status', (req, res) => {
    res.send([{ "status": "success" }]);
});

app.listen(4000, () => {
    // TODO: To discuss
    console.log('Server started');
});