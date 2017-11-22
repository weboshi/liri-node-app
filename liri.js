
var keys = require("./keys.js");

var twitterKey = keys.twitterKeys
var spotifyKey = keys.spotifyKeys

var myTweets = function() {
    var client = new twitter(dataKeys.twitterKeys);
  
    var params = { screen_name: 'autasho', count: 20 };
  
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
  
      if (!error) {
        var data = [];
        for (var i = 0; i < tweets.length; i++) {
          data.push({
              'created at: ' : tweets[i].created_at,
              'Tweets: ' : tweets[i].text,
          });
        }
        console.log(data);
        writeToLog(data);
      }
    });
  };