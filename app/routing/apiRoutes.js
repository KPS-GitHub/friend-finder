// point to friends.js (data file)
var friendData = require("../data/friends");


module.exports = function(app) {

<<<<<<< HEAD
    // A GET route which will display a JSON of all possible friends. 
=======
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. 
>>>>>>> 77493281e5513de59d31daff32fe2f27dfc6a099
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

<<<<<<< HEAD
    // a POST route which will handle the functionality of updating the server with the user data, comparing it against the friendsData, and choosing the best match
    app.post("/api/friends", function(req, res) {
        
        // placeholder object for the best match choice
        var match = {
            name: "",
            photo: "",
            scoreDiff: 0
        };

        // 

=======
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(true);
>>>>>>> 77493281e5513de59d31daff32fe2f27dfc6a099
    });
    
}