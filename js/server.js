require('babel-register');


var mysql = require('mysql');
var express = require('express');

var app = express();

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root'
	password: 'Fredrogers260!',
	database: 'split'
});

db.connect();
console.log("Connected");

//app.get();

app.listen(8080);
