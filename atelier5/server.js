const app = require('./app.js');
const http = require('http');

const port= 5000;
const server = http.createServer(app);
server.listen(port, () =>
  console.log(`Server listening on port: ${port}`)
);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});