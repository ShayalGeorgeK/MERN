import { error } from 'console';
import http from 'http'

const server = http.createServer((req,res) => {
    if (req.url === "/users"){
        if(req.method==='GET'){
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({ message :"Fetching all users"}));
        }
        else if(req.method==='POST'){
            res.writeHead(201,{'content-type':'application/json'});
            res.end(JSON.stringify({ message :"Creating a new user"}));
        }
        else if(req.method==='PUT'){
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({ message :"Updating user"}));
        }
        else {
            res.writeHead(405,{'content-type':'application/json'});
            res.end(JSON.stringify({ error :"Method not allowed"}));
        }  
    }
    else {
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify({ error :"Not found"}));
    }
})
server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});