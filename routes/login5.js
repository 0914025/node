var express = require("express");
var router = express.Router();
const user = require("../sql/user");

router.get("/", function (req, res, next) {
    console.log('此时进入了login5')
      res.render("login");
    });



    router.post("/in", function (req, res, next) {
        
      
        let obj = req.body;
        user.findOne(obj, (err, data) => {
          if (err) {
            console.log(err);
          }
          if(data) {
              res.redirect('/pro')
          } else {
              res.redirect('/register5')
          }
         
           
        });
      });
      


 





module.exports = router;