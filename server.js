var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.send('hello lovers..');
});

app.listen(3000, function(){
	console.log('happy ending only happens on localhost:3000');
});