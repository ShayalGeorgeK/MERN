import express from 'express';

const app = express();

app.get('/flipkart',(req,res)=>{
    res.send("Home Page")
})

app.get('/flipkart/users/:id/cart',(req,res)=>{
    const id = req.params.id
    res.send(`Cart of User ID:${id}`)
})



app.listen(3007,()=>{
    console.log('server running on http://localhost:3007')
})