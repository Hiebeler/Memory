var express = require('express')
const path = require('path');
const cors=require("cors");

var app = express();
app.use(express.json())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongoadmin:mypasswd@10.115.3.24:8017/";

app.use(cors())


app.get('/api/getScoreboard', (req, res) => {
    res.send("moin");
});

app.post('/api/postScore', (req, res) => {
    let name = req.body.name;
    let score = req.body.score;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("memory");
        var myobj = {'name': name, 'score': score};
        dbo.collection("scoreBoard").insertOne(myobj, function (err, _res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            res.send("worked");
        });
    });
});

app.listen(8080, () => {
    console.log(`Example app listening on port  8080`)
})
