var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/arifdesign'
);

// app.get('/', function(req, res){
// 	res.send('hello lovers..');
// });

app.listen(3000, function(){
	console.log('happy ending only happens on localhost:3000');
});

app.use(express.static(__dirname + '/public')); // set the static files location 

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html'); // load our public/index.html file
});