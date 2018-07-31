const express = require('express');
const router = express.Router();

const controller = require('./BeerController');


// router.post('/insert', controller.insert);
router.get('/beers', controller.find);




module.exports = router;