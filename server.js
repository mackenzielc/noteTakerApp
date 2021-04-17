const express = require('express');
//const uniqid = require('uniqid');

//Make sure to run npm i uniqid, npm i fs, npm i path and npm i express

//EXPRESS CONFIGURATION
//Tells node that we are creating an "express" server
const app = express();

//Sets an initial port 
const PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//ROUTER
//Point our servers to a series of "route" files which gives our server a map of how to respond 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//LISTENER
//The below stats the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


