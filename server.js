const { PeerServer } = require('peer');

const port = process.env.PORT || 3000;

const peerServer = PeerServer({
  port: port,
  path: '/'
});

console.log(`Birlikteİzle Sinyal Sunucusu ${port} portunda çalışıyor!`);
