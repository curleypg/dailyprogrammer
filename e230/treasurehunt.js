var simple = require('./find.js');
var https = require ('https');

var jsonone = "https://gist.githubusercontent.com/anonymous/8f35cc4fbbccf6d3f59f/raw/1f9786fc2fec9a7afa20cdd70d2d8afb7d3aecb9/challenge1.txt";
var jsontwo = "https://gist.githubusercontent.com/anonymous/b7733192c0d1004a084b/raw/b5f8df53469410c634034c12d99bbb8ccc46f102/challenge2.txt";

var findValue = function (url, value){
    var getJSON = https.get(url, function(response){
        var data = "";
        if (response.statusCode != 200) {
            console.log("Error: " + response.statusCode + " " + http.STATUS_CODES[response.statusCode]);
            getJSON.end();
            }
        response.setEncoding('utf-8');
        response.on("data", function(chunk){
            data += chunk;
        });
        response.on("end", function(){
            var response = JSON.parse(data);
            console.log(simple.findString(response, value));
        })
        response.on('error', function(err){
            console.log ('problem: '+ err.message);
        });
    });
};

findValue(jsonone, "dailyprogrammer");
findValue(jsontwo, "dailyprogrammer");
