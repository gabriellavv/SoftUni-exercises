const http = require('http');

const app = http.createServer(function (req, res) {
    console.log('Hello, world');

   // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Web!');
    res.end();
});

app.listen(5000);
console.log("Server is listening on port 5000...");