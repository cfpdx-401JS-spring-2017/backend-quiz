/* eslint no-console: "off" */
const http = require('http');
const app = require('./lib/app.js');
require('./lib/connect');


const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('server up on', port);
});

