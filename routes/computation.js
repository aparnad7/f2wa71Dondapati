var express = require('express');

var router = express.Router();
x=Math.random();



/* GET users listing. */





router.get('/', function(req, res, next) {

    if(req.query.x!=undefined)

    {

        x=req.query.x;

    }

  first=Math.imul(x)

  second=Math.log(x);

  third=Math.log10(x)

  res.send(`imul applied to ${x} is ${first}<br>log applied to ${x} is ${second} <br>log10 applied to ${x} is ${third}`);
 


});



module.exports = router;