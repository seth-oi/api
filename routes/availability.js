var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.post('/', function(req, res, next) {
	var access_token;
	var formData = {
		"access_token": req.body.access_token,
		"LocationID": req.body.LocationID,
		"EndDateTime": req.body.EndDateTime,
		"StartDateTime": req.body.StartDateTime,
		"Itineraries": req.body.Itineraries
	};
	request.post({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/availability/multiservice',
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
