const { Server } = require('socket.io');
export default connection = (socket) => {
    console.log(`User connected: ${socket.id}`);
  
    // Handle user joining
    socket.on('user_join', (username) => {
      users[socket.id] = { username, id: socket.id };
      io.emit('user_list', Object.values(users));
      io.emit('user_joined', { username, id: socket.id });
      console.log(`${username} joined the chat`);
    })}