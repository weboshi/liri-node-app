
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');


if (process.argv[2] == "my-tweets") {

  var client = new Twitter(keys.twitterKeys);
 
    var params = {screen_name: 'autasho', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for(var i = 0 ; i < tweets.length; i++) {
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);
        }
      }
      else {
        console.log(oops);
      }
  })
}

    
if (process.argv[2] == "spotify-this-song") {
  songname = process.argv[3]


  var spotify = new Spotify(keys.spotify)

  spotify.search({ type: 'track', query: songname, limit: '1'}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  else {
    console.log(data.items)
  }


})
};

if (process.argv[2] == "movie-this") {
  var request = require('request');
  var movieName = process.argv[3]

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  
  
  request(queryUrl, function(error, response, body) {
  

    if (!error && response.statusCode === 200) {
  
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IDMB Rating: " + JSON.parse(body).imdbRating)
      console.log("Rotten Rating: " + JSON.parse(body).Ratings)
      console.log("Made in: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
})
}
