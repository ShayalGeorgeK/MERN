import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Homeee")
})
app.get('/about',(req,res)=>{
    res.json({name:"John"})
    
})
app.get('/user',(req,res)=>{
    res.send("User page")
})
app.get('/students',(req,res)=>{
    res.json([
        {id:1,name:"Rahul"},
        {id:2,name:"Anita"},
        {id:3,name:"John"}
    ])
})
app.get('/teachers',(req,res)=>{
    res.json([
        {id:1,name:"David"},
        {id:2,name:"Maria"}
    ])
})
app.get('/courses',(req,res)=>{
    res.json(["javascript","node","express"])
})

app.listen(5000,()=>{
    console.log("5000 server"); 
})
