# First thing first
1. run npm i to install ann dependencies
2. add .env file and add the "OMDB_KEY" key with the api key attache to the mail

# To run the project
run npm run dev to start the project. It will run on port 3030

# About this project
This server was build with express, and invokes accordingly to REST api rules.
There are two routes for this project, both of them are GET end points
The first one ('/api/movie') returns a list according to user's querry
the second route ('/api/movie/:omdbID') returns a single movie according to movie id that was sent from the client
In this project, I used env vars to keep my api key