var express = require('express');
var router = express.Router();
var request = require('request');
var config  = require('../config');
/* GET home page. */
router.post('/', function(req, res, next) {
	var access_token;
	var formData = {
		"Email": req.body.Email,
		"Password": req.body.Password,
		"LocationID": req.body.LocationID,
		"client_id": congif.Client.id,
		"client_secret": congif.Client.secret
	};
	request.post({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/customer/login',
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: formData
  	}, function (err, res123, body) {
  		if(!err && body)
  		{
  			res.send(body);
  		}
  		else
  		{
  			res.status(500).send();
  		}
	});
 });

module.exports = router;
