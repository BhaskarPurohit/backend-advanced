
const express = require("express")
const app = express()


app.use((req ,res ,next)=>{
    console.log("hello from middleware");
    next()
})

app.get("/profile",(req, res)=>{
    res.send("hello from Profile route")
})

app.get('/',(req, res)=>{
    res.send("server challu hai")
    console.log("server running");
})

app.listen(3025)