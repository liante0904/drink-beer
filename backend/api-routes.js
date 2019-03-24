// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to drink-beer crafted with love!',
    });
});

// Import contact controller
var beerController = require('./beerController');

// beers routes
router.route('/beers')
    .get(beerController.index)
    .post(beerController.insert);

router.route('/beers/:beer_id')
    .get(beerController.selectOne)
    .patch(beerController.update)
    .put(beerController.update)
    .delete(beerController.delete);

// Export API routes
module.exports = router;