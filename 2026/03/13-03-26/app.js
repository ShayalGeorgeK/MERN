import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/users',(req,res)=>{
    res.send("User Page")
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    res.send(`User ID is ${id}`)
})

app.get('/flipkart/users/:id/cart',(req,res)=>{
    const id = req.params.id
    res.send(`Cart of User ID:${id}`)
})

app.get('/search',(req,res)=>{
    console.log(req.query)
    const item = req.query.item || 'No item found'
    res.send(item)
})

app.get('/users/:id/posts',(req,res)=>{
    const {id} = req.params
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    res.send(`Posts for User ID:${id} - page ${page}, limit ${limit}`)
})


app.listen(3001,()=>{
    console.log('server running on http://localhost:3001')
})