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
     console.log("People in database: ");
     console.log( friendsDataArray);
     console.log("Calculating difference between each score between survey submission and people in database"); 
     var matchArray = []; // The scores is in this index will be in allignment with the persons in friendsDataArray.
     friendsDataArray.forEach(function (person){
       console.log(person.name);
       console.log(newPerson.name); 
      for(var i = 0; i < 10; i ++){ 
        let scoreResult = Math.abs(person.scores[i] - newPerson.scores[i]);
   //    let scoreResultNegated = Math.abs(score);
        console.log(scoreResult);
      }

      person.scores.forEach(function(score){
        
      });
     });
     friendsDataArray.push(newPerson);//add person to friends array.

});
}