import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  console.log(JSON.stringify(req.headers))
  ws.on('error', console.error);
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});