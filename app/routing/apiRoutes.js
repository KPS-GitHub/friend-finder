// point to friends.js (data file)
var friendData = require("../data/friends");


module.exports = function(app) {

    // A GET route which will display a JSON of all possible friends. 
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // a POST route which will handle the functionality of updating the server with the user data, comparing it against the friendsData, and choosing the best match
    app.post("/api/friends", function(req, res) {
        
        // placeholder object for the best match choice
        var match = {
            name: "",
            photo: "",
            scoreDiff: 0
        };

        // 

    });
    
}