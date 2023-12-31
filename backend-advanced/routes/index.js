// var express = require('express');
// var router = express.Router();
// const userModal = require('./users')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/create",async function(req, res){
//  const createdUser = await userModal.create({
//     username: "BruceWayne",
//     name:"Bhaskar",
//     age:26
//   }) //async code

//   res.send(createdUser)
// })



// module.exports = router;


var express = require("express")
var router = express.Router()
const userModal = require("./users")

router.get("/", function(req,res){
  
})






















