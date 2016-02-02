var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.post('/', function(req, res, next) {
	var access_token;
	var formData = {"access_token": req.body.access_token, "LocationID": req.body.LocationID, "TreatmentID": req.body.TreatmentID};
	request.post({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/employees',
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: formData
  	}, function (err, res123, body) {
  		if(!err && body)
  		{
 			res.send(body.Results);
  		}
  		else
  		{
  			res.status(500).send();
  		}
	});
 });

module.exports = router;
