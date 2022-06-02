var express = require('express')
const path = require('path');

var app = express();

app.get('/api/getScoreboard', (req, res) => {
    res.send("moin");
});

app.listen(8080, () => {
    console.log(`Example app listening on port  8080`)
})
