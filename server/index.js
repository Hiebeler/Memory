var express = require('express')
const path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(5000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
