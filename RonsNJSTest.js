const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');
const { Buffer } = require('node:buffer');
const message = Buffer.from('');

server.on('error', (err) => {
   console.log(`server error:\n${err.stack}`);
   //server.close();
});
