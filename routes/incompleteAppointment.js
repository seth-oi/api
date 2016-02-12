var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.post('/', function(req, res, next) {
	var access_token;
	var formData = {
		"ItineraryTimeSlot": {
			"CurrentPackagePrice": {
			"Amount": 0,
			"CurrencyCode": ""
		},
		"IsPackage": false,
		"PackageID": null,
		"StartDateTime": "/Date(" + req.body.StartDateTime + ")/",
		"TreatmentTimeSlots": [
			{
				"CurrentPrice": {
				"Amount": 0,
				"CurrencyCode": ""
			},
			"Duration": null,
			"EmployeeID": null,
			"StartDateTime": "/Date(" + req.body.StartDateTime + ")/",
			"TreatmentID": req.body.TreatmentID,
			"RoomID": null,
			"Employee2ID": null,
			"PrefferedStaffGender": null,
			"EmployeeWasRequested": false
			}
		],
		"PrefferedStaffGender": null
		},
		"LocationID": req.body.LocationID,
		"access_token": req.body.access_token
	};
	request.post({
	    uri: 'https://apicurrent-app.booker.ninja/WebService4/json/CustomerService.svc/appointment/createincomplete',
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: formData
  	}, function (err, res123, body) {
		if(!err && body){
			res.send(body);
		}
		else
		{
			res.status(500).send();
		}
  	})
 });

module.exports = router;
