const friendsData = require("../data/friends");

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
       res.json(friendsData); 
    });

    app.post("/api/friends", (req, res) => {
        if (friendsData.length < 10) {
            friendData.push(req.body);
            res.json(true);
        }
    });
};

