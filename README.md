# LIRI Bot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## How it works?
LIRI can take in one of the following **commands** and the [user entry]:
-	**concert-this**  [U2]
-	**spotify-this-song** [complicated]
-	**movie-this** [avatar]
-	**do-what-it-says** [user entry is entered from a file]


## Commands execution samples

#### node liri.js concert-this u2
![concert-this](images/concertThis.PNG)

#### node liri.js spotify-this-song complicated
![spotifyThis](images/spotifyThis.PNG)

#### node liri.js spotify-this-song (If there is no input from the user, it displays a default song information)
![spotifyThisDefault](images/spotifyThisDefault.PNG)

#### node liri.js movie-this avatar
![cmovieThis](images/movieThis.PNG)

#### node liri.js movie-this (If there is no input from the user, it displays a default movie information)
![movieThisDefault](images/movieThisDefault.PNG)

#### node liri.js do-what-it-says
![cdoWhatItSays](images/doWhatItSays.PNG)


## Technology
This project was built with JavaScript, and Node.
