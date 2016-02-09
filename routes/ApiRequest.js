var express = require('express');
var router = express.Router();
var request = require('request');
var congif = require('../config');
console.log(congif.Client);
/* GET home page. */
router.get('/', function(req, res, next) {
	var access_token;
	request.get({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/access_token?client_id=' + congif.Client.id + '&client_secret=' + congif.Client.secret + '&grant_type=client_credentials',
	    method: 'GET'
  	}, function (err, res123, body) {
  		if(!err && body)
  		{
  			access_token = JSON.parse(res123.body).access_token;
  			res.send(access_token);
  		}
  		else
  		{
  			res.status(403).send();	
  		}
	});
 });

module.exports = router;
