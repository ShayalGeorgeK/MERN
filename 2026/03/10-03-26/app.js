import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); 
  res.end(`
    <title>My Page</title>
    <body>
        <h1>Hello World!</h1>
        heeelllloo
    </body>
    `);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
