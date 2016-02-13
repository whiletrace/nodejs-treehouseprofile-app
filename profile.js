//we need a simple way to look up users javascript points and info
// solution use node.js to connect to treehouse api to print out 
var https = require("https");
var http = require("http");
var prompt = require('prompt');

prompt.start();

 prompt.get(['username'], function (err, result) {
  // reehouseAPI function call that passes username as a method to the parameter result.
  TreehouseAPI(result.username);
    
     });


// connect to the api url (https://teamtreehouse.com/traceharris.json)
 function TreehouseAPI(username){
   var request  = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
      var body ="";
  
     //read the data 
     response.on('data', function(chunk){
       body += chunk;
     });
     
     // parse the data
    response.on('end', function(){
       if(response.statusCode === 200){
         try {
          var profile = JSON.parse(body);
          // print the data
           printMessage(username, profile.points.total, profile.badges.length);
          } catch(error){
           //Parse Error
           printError(error);
          }
       } else {
         //Status code error
       printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        request.on("error", printError);
    }
  
  
     });   
     
     });
 
};

//print out message 
function printMessage(username, points, badgecount) {
  var message =  username + " has " + points + " total points " +"and a total badgecount of " + badgecount
  console.log(message);
};

//print out error message 
function printError(error){
  console.log(error.message);
};





// export.modules.get = get;



