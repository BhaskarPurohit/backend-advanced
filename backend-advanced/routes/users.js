// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/sampleDB") //creates data on databse side

// //making schema , means the smallest entity me kya kya hoga
// const userSchema = mongoose.Schema({
//   username: String,
//   name: String,
//   age: Number
// })


// module.exports = mongoose.model("user",userSchema) //makes collection

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:21017/myData")

//schema matlab ban ne wala har document kesa hoga
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  age: Number
})


module.exports = mongoose.model("userModal",userSchema)









