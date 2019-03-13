var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bP = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/Abonne',{ useNewUrlParser: true });

app.use(cors());
app.use(bP.urlencoded({ extended : true}));
app.use(bP.json());
app.use('/', appRoutes);


http.createServer(app).listen(port);

console.log("Backend running on por:j"+port);
