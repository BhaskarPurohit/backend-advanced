
const express = require("express")
const app = express()

app.get('/',(req, res)=>{
    res.send("server challu hai")
    console.log("server running");
})

app.listen(3025)