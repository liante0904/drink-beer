// Import dotenv
require('dotenv').config();

// Setup server port
const port = process.env.PORT || PORT;

// Import express
const express = require('express');

// Import CORS 
const cors = require('cors');

// Import Body parser
const bodyParser = require('body-parser');

// Import Mongoose
const mongoose = require('mongoose');

// Initialize the app
const app = express();

// Enable CORS
app.use(cors());

// Import routes
const apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const {
    PORT: PORT = 4000, // Default Port or .env
    MONGO_URI: MONGO_URI
} = process.env;
// Settings for using Promise in mongoose
mongoose.Promise = global.Promise;

// Connect to Mongoose and set connection variable
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;