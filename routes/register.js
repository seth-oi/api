var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.post('/', function(req, res, next) {
	var access_token;
	var formData = {
		"Password": req.body.Password,
        "Email": req.body.Email,
        "FirstName": req.body.FirstName,
        "HomePhone": req.body.HomePhone,
        "LastName": req.body.LastName,
        "LocationID": req.body.LocationID,
        "access_token": req.body.access_token
	};

	request.post({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/customer/account',
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: formData
  	}, function (err, res123, body) {
      console.log(err);
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
