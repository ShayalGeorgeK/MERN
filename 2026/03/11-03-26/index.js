import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.end("Home page");
    }
    else if(req.url==="/user"){
        res.writeHead(200,{'content-type':'text/html'});
        res.end("Users page");
    }
    else if(req.url==="/products"){
        res.writeHead(200,{'content-type':'text/html'});
        res.end("Products page");
    }
    else {
        res.writeHead(405,{'content-type':'text/html'});
        res.end("Not defined");
    }
})

server.listen(3000,()=>{
    console.log("server 3000");
    
})