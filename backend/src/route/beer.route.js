module.exports = (app) => {
    const beers = require('../controllers/beer.controller.js');

    // Create a  Beer
    app.post('/beers', beers.create);

    // Retrieve all Beers
    app.get('/beers', beers.findAll);

    // Retrieve a Beer by Id
    //app.get('/beers/:beerId', beers.findOne);

    // Update a Beer by Id
    //app.put('/beers/:beerId', beers.update);
    
    // Delete a Beer by Id
    //app.delete('/beers/:beerId', beers.delete);
}   