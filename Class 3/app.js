const http = require('http');
const route = require('./route');
const { error } = require('console');

const server = http.createServer(route);

server.listen(3000);