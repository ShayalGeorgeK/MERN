import express from 'express'

const app = express();

//set ejs as view engine
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // const name = "Shayal"
    res.render("home",{name : "shayal"});
})

app.get("/products",(req,res)=>{
    const products = ["apple","orange","grapes"]
    res.render("products",{products})
})

app.listen(3000,()=>{
    console.log("server running")
})