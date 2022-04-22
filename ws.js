var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message);
  })
})

wss.broadcast = function broadcast(msg){
  wss.clients.forEach(function each(client){
    client.send(msg);
  });
};

module.exports = wss;