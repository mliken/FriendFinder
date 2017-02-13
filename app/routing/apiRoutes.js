// Requiring NPMs
var express = require("express");
var app = express();
// Calling exports from other files.
var database = require("../data/database.js");
var friends = database.data;
//Exports the function which will pull from the /api URL the JSON object with all its indexes to display on page.
exports.getfriends = app.get("/api", function(req, res) {
	res.json(friends);
});
//Exports the function which will add a new JSON object to the whole database within the /api URL.
exports.postfriends = app.post("/api", function(req, res) {
	var newUser = req.body;
	friends.push(newUser);
});

//logic for FriendFinder
//identifying the array from most recent user
var x=friend.length-1;
//total difference of 0 prior to the calculation
var totalDifference=0;
//giving incompatible a high number 
var incompatible = 10000;
var compatible;
//for loop within a for loop
//find the difference between most recent user and previous survey results

for(var i=0; i < friend.lenth-1; i++){
	for (var j =0; j < 10; j++){
//calculating difference
var difference = friend[i].scores[j]-friend[x].scores[j];
difference=Math.abs(difference);
totalDifference=totalDifference+difference;
	}
//checking to see which pair of responses has the lowest score
if(totalDifference<incompatible){
	incompatible=totalDifference;
	console.log("incompatible"+ "incompatible");
	//assigning the compatible variable the value of object with the lowest score
	compatible = friend[1];
}
totalDifference = 0;
//response in JSON format
res.json(compatible);

}

