// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var newPerson;

// ===============================================================================
// ROUTING
// ===============================================================================

var friendsDataArray = require("../data/friends");

module.exports = function(app) {

    
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    console.log("friends data" + friendsData)
  });


  app.post("/api/friends", function(req, res) {
    //containts the friends array==================
    console.log("NEWSUBMISSION==================")
     newPerson = req.body; // data from survey
     console.log("Survey data submited: ");
     console.log(newPerson);    
     friendsDataArray.push(newPerson);//add person to friends array.

     console.log("People in database: ");
     console.log( friendsDataArray);


});
}