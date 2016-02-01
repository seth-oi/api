var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
	var access_token;
	request.get({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/access_token?client_id=uhw8PcCvuxoS&client_secret=8YUbN71NkZVg&grant_type=client_credentials',
	    method: 'GET'
  	}, function (err, res123, body) {
  		access_token = JSON.parse(res123.body).access_token;
  		console.log(err);
  		console.log(JSON.parse(res123.body));
		 res.send(access_token)
	});
 	});

module.exports = router;
