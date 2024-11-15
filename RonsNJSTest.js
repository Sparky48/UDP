const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');
const { Buffer } = require('node:buffer');
const message = Buffer.from('');

server.on('error', (err) => {
   console.log(`server error:\n${err.stack}`);
   //server.close();
});

server.on('message', (msg, rinfo) => {
   //console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});   

server.on('listening', () => {
   const address = server.address();
   //console.log(`server listening ${address.address}:${address.port}`);
});   

server.bind({
   port: 2390,
   address: '192.168.50.62'
});

//server.send('TurnCCW', 0, 7, 2390, 192.168.50.49);
