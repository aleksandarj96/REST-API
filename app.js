var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/test', function(req, res){
    res.json(["test1", "test2", "test3"])
})

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(8080, function(){
    console.log('Listening on port 8080!')
})

