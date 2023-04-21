const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    if (pathname === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is main pagez\n');
    } else if (pathname === '/login') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the login page\n');
    } else if (pathname === '/user') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the user page\n');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page not found\n');
    }
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});





