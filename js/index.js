var app = require('express')();
var server = require('http').Server(app);
var WebSocket = require('ws');

var ws = new WebSocket.Server({ port: 8080 });

ws.on('connection', function connection(ws) {
    console.log('已连接');
    
    ws.on('message', function incoming(message) {
        console.log('来自网页消息： %s', message);
    });

    ws.send('world');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// app.listen(3000);
