
var jade = require('jade');
var path = require('path');
var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tnks = require('./tnks');

/*
  TODO:
*/

app.set('port', process.env.PORT || 5454);
app.set('views', path.resolve(__dirname, 'views'));
app.set('templates', path.resolve(__dirname, 'templates'));
app.set('assets', path.resolve(__dirname, 'assets'));

app.use(express.static( app.get('assets') ));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// Error handling
app.route('/error')
  .get(function(req, res) {
    res.send( jade.renderFile(path.resolve(app.get('templates'), 'error.jade'), { error: app.get('error') }) );
  });

app.route('/')
  .get(function(req, res) {
    res.send( jade.renderFile(path.resolve(app.get('templates'), 'index.jade')) );
  });

io.on('connection', function(socket) {
  socket.on('init', function(msg) {
    io.emit('init', tnks);
  });
});

http.listen( app.get('port') );