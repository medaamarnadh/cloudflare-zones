var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cloudflare/zones',function(req,res,next){
  request({
    url:'https://api.cloudflare.com/client/v4/zones',
    headers:{
      'X-AUTH-KEY':process.env.X_AUTH_KEY,  //58291eab0b03020dbbdce126095a053a3165a
      'X-AUTH-EMAIL':process.env.EMAIL //amaranadh.m@westagilelabs.com
    },
    qs:{
      page:1,
      per_page:500
    }
  },function(error,response,body){
    if(error){
      res.statusCode = 500;
      res.send(error);
    }else{
      res.statusCode = 200;
      res.send({
        success:true,
        data:body
      });
    }
  });
});

module.exports = router;
