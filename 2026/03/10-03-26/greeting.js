import http from 'http'
import url  from 'url'

const server = http.createServer((req,res) => {
    //parse the url
    const parsedUrl = url.parse(req.url,true);
    //http://localhost:1000/greet?name=shayal

    //check which route it is
    if(parsedUrl.pathname==='/greet'){
        // extract query param 'name'
        const name = parsedUrl.query.name || 'Guest';

        //send response
        res.writeHead(200,{'content-type':'text/plain'});
        res.end(`Hello, ${name}`);
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end(`not found`);
    }

})
server.listen(1000, () => {
  console.log('Server running at http://localhost:1000/');
});