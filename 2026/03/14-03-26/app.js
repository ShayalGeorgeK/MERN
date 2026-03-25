import express from 'express';

const app = express()

function applicationMiddleware(req,res,next) {
    console.log("Middleware executed")
    console.log("Method : ", req.method)    
    console.log("URL : ",req.url)
    next()
}

app.use(applicationMiddleware)

//Error handling middleware
app.use(function(err,req,res,next){
    console.log("Error message:",err.message)
    res.status(500).send("Server Error")
})

app.get('/',function(req,res){
    res.send("Home Page")
})

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})