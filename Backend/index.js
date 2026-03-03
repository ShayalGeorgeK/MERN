const express=require('express')
const products=require('./data.js')
const logger=require('./logger.js')
const authorize=require('./authorize.js')

const app = express()

app.use(express.json())
//middleware
app.use([logger,authorize])//will be applied to all

app.get('/',(req,res)=>{
    // res.send('<a href="/api/products">products</a>')
    res.send("welcome")
})

app.get('/contacts',(req,res)=>{
    res.send("contact us")
})

app.get('/api/products/:prodID',(req,res)=>{
    // console.log(req.params);
    const {prodID} = req.params //de structuring
    
    // const newproducts = products.map((value)=>{
    //     const{id,name}=value //de structuring
    //     return{
    //         id,
    //         name
    //     }
    // })
    // res.status(200).json(newproducts)

    const singleproducts = products.find((value)=>value.id===Number(prodID))
    res.status(200).json(singleproducts)

})

app.get('/about',(req,res)=>{
    res.send("welcome all")
})

app.get('/home',(req,res)=>{
    res.send("my home")
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("posted")
})

//creating a server

app.listen(2007,()=>{
    console.log("server is runnninggggg")
    
})