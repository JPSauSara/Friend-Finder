// A GET route with the url /api/friends. 
// 	This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
// 	This will be used to handle incoming survey results. 
// 	This route will also be used to handle the compatibility logic.

//These routes for our data. Help determine data user sees and data can post

var friendsData = require ('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});
};