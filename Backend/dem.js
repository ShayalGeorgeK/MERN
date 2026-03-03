const express = require('express')

const dotenv=require('dotenv').config()
const mongoose=require('mongoose')


const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))


app.listen(process.env.PORT,()=>{
    console.log("server running");
    
})