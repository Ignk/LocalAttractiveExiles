const http = require('http');
const server = http.createServer((req, res) => {
    const param = req.url.substring(1);
    // Your code goes here
    res.end('Not implemented');
});
server.listen(3003, '127.0.0.1');