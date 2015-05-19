var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express3-handlebars');
var http = require('http');
var routes = require('./routes/index');

var app = express();

// view engine setup
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/statistic', function(req, res){
  res.render('statistic');
});


http.createServer(app).listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
});

module.exports = app;
