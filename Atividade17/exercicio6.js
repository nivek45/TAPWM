let http = require('http');
let server = http.createServer(function (request, response) {
    response.end('<html><body><h1>Site Fatec</h1></body></html>');
});

server.listen(3000);
console.log('Servidor rodando');