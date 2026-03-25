import http from "http";

const server = http.createServer((req,res) =>{
    res.writeHead(200, {"content-type": "text/html"});
    res.end("MERN ");
})

server.listen(5000, ()=> {
    console.log("server is listening on 5000");
    
})