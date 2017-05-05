const app = require('./lib/app');
const http = require('http');
require('./lib/connect');
//TODO: Figure out error on line 5 
const server = http.createServer(app);

server.listen(3000, () => {
  console.log('listing on !... ', server.address());
});