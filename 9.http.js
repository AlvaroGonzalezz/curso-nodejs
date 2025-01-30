const http = require('node:http');
const { findPort } = require('./10.free-port');
const desiredPort = process.env.PORT ?? 3000; // variable de entorno


const server = http.createServer((req, res) => {
    console.log("Request received");
    res.end("Hello Worlsd");
});

findPort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});

