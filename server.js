require('babel-register');



var mysql = require('mysql');
var express = require('express');
var path = require('path');

var app = express(); 
var db = mysql.createConnection({
	host: 'localhost',
	user: 'split_admin',
	password: 'password',
	database: 'split'
});

db.connect();



console.log("Database Connected");

//app.get();

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'), function(err) {
	if(err) 
		console.log(err);
	else
		console.log("Index Sent!")
	});
});

app.listen(8080); 



