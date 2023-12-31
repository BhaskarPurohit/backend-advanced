var express = require('express');
var router = express.Router();
const userModal = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create",(req, res)=>{
  userModal.create({
    username: "BruceWayne",
    name:"Bhaskar",
    age:26
  }) //async code
})



module.exports = router;
