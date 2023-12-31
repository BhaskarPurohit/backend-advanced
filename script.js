
const express = require("express")
const app = express()

//middleware runs before every route and the code written in the middleware executes first
app.use((req ,res ,next)=>{  //initializing middleware
    console.log("hello from middleware");
    next()
})

app.get("/profile",(req, res)=>{
    res.send("hello from Profile route")
})

app.get("/profile/:username",(req,res)=>{
    res.send(`hello from ${req.params.username}`)
})

app.get('/',(req, res)=>{
    res.send("server challu hai")
    console.log("server running");
})

app.listen(3025)