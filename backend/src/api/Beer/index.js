const express = require('express');
const router = express.Router();
const controller = require('./BeerController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/users', controller.get);
router.post('/users', controller.create);
router.get('/users/:beerid', controller.get);


module.exports = router;