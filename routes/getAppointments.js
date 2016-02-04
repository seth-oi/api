var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/:custID/:access_token', function(req, res, next) {
	console.log(req.params);
	request.get({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/customer/'+ parseInt(req.params.custID) +'/appointments?access_token='+ req.params.access_token,
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
  	}, function (err, res123, body) {
		if(!err && body){
			console.log(body);
			res.send(body);
		}
		else
		{
			res.status(500).send();
		}
  	})
 });

module.exports = router;
