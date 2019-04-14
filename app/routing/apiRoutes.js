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
    let matchArray = [];
    //containts the friends array==================
    console.log("NEWSUBMISSION==================")
     newPerson = req.body; // data from survey
     console.log("Survey data submited: ");
     console.log(newPerson);    
     console.log("People in database: ");
     console.log( friendsDataArray);
     console.log("Calculating difference between each score between survey submission and people in database"); 
  // The scores is in this index will be in allignment with the persons in friendsDataArray.
     friendsDataArray.forEach(function (person){

       let talley = 0;
       console.log(person.name);
       console.log(newPerson.name); 
      for(var i = 0; i < 10; i ++){ 
        let scoreResult = Math.abs(person.scores[i] - newPerson.scores[i]);
        console.log(scoreResult);
        talley = talley + scoreResult;
      }
      console.log("total score: ");
      console.log(talley);
      matchArray.push(talley);
      console.log("Results Talley Array Databse");
      console.log(matchArray);
     });

     friendsDataArray.push(newPerson);//add person to friends array.

});
}