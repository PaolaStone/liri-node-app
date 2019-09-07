require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var command = process.argv[2];
var userEntry = process.argv[3];

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify)

function concertThis(){
    axios.get("https://rest.bandsintown.com/artists/"+ userEntry + "/events?app_id=codingbootcamp").then(
        
        function(response){
            
            for (var i = 0; i < response.data.length; i++) {
                console.log("   ")
                console.log("Name of the venue: "+ response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log("Date of the Event: " + moment(response.data[i].datetime).format("L"));
                console.log("--------------------")
            }
        },

        function(error) {
            if (error.response) {
              console.log(error.response.data);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
        }
    )
};

function spotifyThisSong(){
    if (!userEntry) {
        spotify.search({type: "track", query: "The Sign" }, function(err, data) {
            if (err) {
                console.log(err);
            }

            var songResults = data.tracks.items;
                console.log("  ")
                console.log("Artist(s): " + songResults[3].artists[0].name);
                console.log("Song Name: " + songResults[3].name);
                console.log("Preview Link: " + songResults[3].preview_url);
                console.log("Album: " + songResults[3].album.name);
                console.log("--------------------")
               
        });
    } else{
        spotify.search({type: "track", query: userEntry }, function(err, data) {
            if (err) {
                console.log(err);
            }
            
            var songResults = data.tracks.items;
            
            console.log("   ")
            console.log("Artist(s): " + songResults[0].artists[0].name);
            console.log("Song Name: " + songResults[0].name);
            console.log("Preview Link: " + songResults[0].preview_url);
            console.log("Album: " + songResults[0].album.name);
            console.log("--------------------")
        });

    }

} 

        
function movieThis(){
    if (!userEntry) {
        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            console.log("    ")
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("----------------")
        });
            
    
    } else{
    axios.get("http://www.omdbapi.com/?t=" + userEntry + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            console.log("    ")
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("----------------")
        });
    }
}


function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
			logOutput.error(err);
		} else {
            var randomArray = data.split(",");
            console.log(randomArray)
            spotify.search({type: "track", query: randomArray }, function(err, data) {
                if (err) {
                    console.log(err);
                }
    
                var songResults = data.tracks.items;
                    console.log("  ")
                    console.log("Artist(s): " + songResults[0].artists[0].name);
                    console.log("Song Name: " + songResults[0].name);
                    console.log("Preview Link: " + songResults[0].preview_url);
                    console.log("Album: " + songResults[0].album.name);
                    console.log("--------------------")
            });

        }
    })
}

switch (command){
    case "concert-this": concertThis();
        break;
    case "spotify-this-song": spotifyThisSong();
        break;
    case "movie-this": movieThis();
        break;    
    case "do-what-it-says": doWhatItSays();
        break;
    default:
        console.log("Valid options are: / concert-this / spotify-this-song / movie-this / do-what-it-says")
}
