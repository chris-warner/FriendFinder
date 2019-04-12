// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    
  app.get("../data/friends.js", function(req, res) {
    res.json(tableData);
  });


  app.post("./data/friends.js", function(req, res) {


});
}
