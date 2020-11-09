var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
 
  res.render("register");
});

router.post("/in", function (req, res, next) {


  let obj = req.body;



user.findOne({username:obj.username},(err,data)=>{
    if(err){
        console.log(err)
    }
    if(data) {
        res.redirect('/register5')
    }else {
        user.insertMany(obj,(err,data)=>{
            if(err) {
                console.log(err)
            } 
            console.log(data)
            res.redirect('/login5')
        })
    }
})





 
});

module.exports = router;
