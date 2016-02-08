var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/:locationID/:access_token', function(req, res, next) {
	console.log(req.pamas);
	request.get({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/location/' + parseInt(req.params.locationID) + '/gift_certificates?access_token=' + req.params.access_token,
	    method: 'GET'
  	}, function (err, res123, body) {
  		console.log(body, err);
  		if(!err && body)
  		{
  			console.log(body);
 			res.send(body);
  		}
  		else
  		{
  			res.status(500).send();
  		}
	});
 });

module.exports = router;
