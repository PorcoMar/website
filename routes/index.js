var express = require('express');
var config = require("../config/config.js");
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/mallProductDesc",function(req,res,next){
	var url = config.url + req.url;

	request(url,function(err,response,body){
		res.send(body);
	});
});

module.exports = router;
