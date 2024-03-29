const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const uuid = require('node-uuid');

const expApp = express();
const httpServer = http.createServer(expApp);
let rooms = {};

expApp.use(express.static('./dist/uvid'));

expApp.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/uvid/index.html'));
});

const port = process.env.PORT || 8080;
httpServer.listen(port, '0.0.0.0', () => {
    const address = httpServer.address();
    console.log('server listening at', address);
});

socketIO.listen(httpServer).on('connection', (socket) => {
  let currRoom;

  socket.on('init', (data) => {
      currRoom = (data || {}).room || uuid.v4();
      //new room
      if(!rooms[currRoom]) {
          rooms[currRoom] = {};
          rooms[currRoom][data.userId] = socket;
          console.log('Room #', currRoom, ' created');
          socket.emit('connected_to_room', { roomId: currRoom });
      } else {        //existing room
          let nbUserInRoom = 0;
          for(let userId in rooms[currRoom]) {
              nbUserInRoom += 1;
          }

          if(nbUserInRoom < 5) {
              for(let userId in rooms[currRoom]) {
                  rooms[currRoom][userId].emit('user_connected', { userId: data.userId, username: data.username })
                  console.log('Sending user_connected to', userId);
              }
              rooms[currRoom][data.userId] = socket;
              socket.emit('connected_to_room', { roomId: currRoom });
          } else {
              console.log('Room is full, connecting to a new room.');
              currRoom = uuid.v4();
              rooms[currRoom] = {};
              rooms[currRoom][data.userId] = socket;
              console.log('Room #', currRoom, ' created');
              socket.emit('room_is_full', { roomId: currRoom });
          }
      }

      console.log('User', data.userId, 'connected to room', currRoom);
  });

  socket.on('message', (data) => {
      if(rooms[currRoom] && rooms[currRoom][data.dest]) {
          console.log('Sending message from ', data.from, ' to ', data.dest);
          rooms[currRoom][data.dest].emit('message', data);
      } else {
          console.warn('User ', data.dest, ' not found.');
      }
  });

  //Disconnects using the Disconnect button
  socket.on('disconnects', (data) => {
      if(data.userId) {
          console.log(data.userId, 'disconnecting');
          if(!currRoom || !rooms[currRoom]) {
              return;
          }

          delete rooms[currRoom][data.userId];
          for(let userId in rooms[currRoom]) {
              rooms[currRoom][userId].emit('user_disconnected', { userId: data.userId })
              console.log('Sending user_disconnected to', userId);
          }
      }
  });

  //Disconnects by leaving the page
  socket.on('disconnect', () => {
      if(!currRoom || !rooms[currRoom]) {
          return;
      }

      let foundUserId = undefined;
      for(let userId in rooms[currRoom]) {
          if(rooms[currRoom][userId].id == socket.id) {
              foundUserId = userId
          }
      }

      if(foundUserId) {
          console.log(foundUserId, 'disconnecting');
          delete rooms[currRoom][foundUserId];
          for(let userId in rooms[currRoom]) {
              rooms[currRoom][userId].emit('user_disconnected', { userId: foundUserId })
              console.log('Sending user_disconnected to', userId);
          }
      }

  });
});
