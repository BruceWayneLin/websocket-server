var app = require('express')();
var server = require('http').Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', socket => {
  let counter = 0;
  setInterval(() => {
    socket.emit('counter', ++counter);
  }, 1000);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000);