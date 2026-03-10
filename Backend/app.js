const { error } = require("console");
const fs = require("fs");
const { data } = require("react-router-dom");

// fs.readFile("data.txt","utf8",(error,data) =>{

//     if(error){
//         console.log("Error reading file");
//         return;
        
//     }

//     console.log("file content :");
//     console.log(data);
    
    
// })

// fs.writeFile("log.txt","Yohohohohooooo",(error)=>{

//     if (error) {
//         console.log("Write failed");
//         return;
//     }

//     console.log("File written Successfully");
    
// })


// fs.appendFile("log.txt","\nNew Request",(error)=>{

//     if (error) {
//         console.log("Append failed");
//         return;
//     }

//     console.log("Log updated");
    
// })





// const path = require("path");

// const filePath = path.join("folder","data","file.txt");

// console.log(filePath);









// const os = require("os");

// console.log("Operating System:",os.platform());

// console.log("CPU cores",os.cpus().length);

// console.log("Free Memory:",os.freemem());




//import http module
const http = require("http");
const { response } = require("express");

//create server
const server = http.createServer((request,response)=>{

    //send text response
    response.end("Hello from node server");
});

// start server
server.listen(7000,()=>{
    console.log("Server  running on port 7000");
    
});