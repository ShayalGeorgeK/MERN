const http = require("http")
const fs = require("fs")

fs.writeFile("data.txt","Yohohohohooooo",(error)=>{

    if (error) {
        console.log("Write failed");
        return;
    }

    console.log("File written Successfully");
    
})

const server = http.createServer((req,res) => {

    fs.readFile("data.txt","utf8",(err,data) =>{

        if(err){
            console.log("Error reading file");
            return
        }

        res.end(data);
    })
})

server.listen(3000, ()=>{
    console.log("Server  running on port 3000");
});